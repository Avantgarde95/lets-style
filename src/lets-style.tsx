import { useEffect, ElementType, ComponentProps } from "react";
import { compile, middleware, serialize, stringify, prefixer } from "stylis";
import murmurhash from "murmurhash";

// ===================================================================
// Define core types.

interface StyleBase {
  id: string;
  type: string;
  code: string;
  neededStyles: Array<Style>;
}

interface NormalStyle extends StyleBase {
  type: "Normal";
  className: string;
}

interface KeyframesStyle extends StyleBase {
  type: "Keyframes";
  animationName: string;
}

type Style = NormalStyle | KeyframesStyle;

// ===================================================================
// Tools for generating the code.

type InputParts = TemplateStringsArray;
type InputArg = undefined | number | string | Style;

function hash(value: string) {
  return murmurhash(value).toString(16);
}

function processInput(parts: InputParts, ...args: Array<InputArg>) {
  const codeParts: Array<string> = [];
  const neededStyles: Array<Style> = [];

  for (let i = 0; i < args.length; i++) {
    codeParts.push(parts[i]);

    const arg = args[i];

    switch (typeof arg) {
      case "object":
        if (arg.type === "Normal") {
          codeParts.push(arg.code);
        } else if (arg.type === "Keyframes") {
          codeParts.push(arg.animationName);
          neededStyles.push(arg);
        } else {
          throw new Error("Style has unknown type!");
        }

        break;
      case "number":
        codeParts.push(`${arg}px`);
        break;
      case "string":
        codeParts.push(arg);
        break;
      default:
        throw new Error(`Type ${typeof arg} is not supported!`);
    }
  }

  codeParts.push(parts[args.length]);

  const code = codeParts.join("");
  const id = hash(code);
  return { id, code, neededStyles };
}

// ===================================================================
// Tools for inserting the styles into the page.

const insertedStyleIDSet = new Set<string>();

function parseNestedCode(code: string) {
  return serialize(compile(`${code}`), middleware([prefixer, stringify]));
}

function insertStyle(style: Style, wrap: boolean) {
  if (typeof document === "undefined") {
    return;
  }

  if (insertedStyleIDSet.has(style.id)) {
    return;
  }

  style.neededStyles.forEach((neededStyle) => {
    insertStyle(neededStyle, true);
  });

  const element = document.createElement("style");
  element.dataset.styleId = style.id;
  element.dataset.styleType = style.type;

  let fullCode: string;

  if (!wrap) {
    fullCode = style.code;
  } else if (style.type === "Normal") {
    fullCode = `.${style.className} { ${style.code} }`;
  } else if (style.type === "Keyframes") {
    fullCode = `@keyframes ${style.animationName} { ${style.code} }`;
  } else {
    throw new Error("Style has unknown type!");
  }

  element.appendChild(document.createTextNode(parseNestedCode(fullCode)));
  document.head.appendChild(element);
  insertedStyleIDSet.add(style.id);
}

// ===================================================================
// Tools for creating the style instances.

function css(parts: InputParts, ...args: Array<InputArg>): NormalStyle {
  const { id, code, neededStyles } = processInput(parts, ...args);

  return {
    id,
    type: "Normal",
    code,
    className: `css-${id}`,
    neededStyles,
  };
}

function keyframes(
  parts: InputParts,
  ...args: Array<InputArg>
): KeyframesStyle {
  const { id, code, neededStyles } = processInput(parts, ...args);

  return {
    id,
    type: "Keyframes",
    animationName: `animation-${id}`,
    code,
    neededStyles,
  };
}

// ===================================================================
// Tools for rendering the components.

function styled<TargetType extends ElementType>(Target: TargetType) {
  type TargetProps = ComponentProps<TargetType>;

  function createStyledComponent<Props = TargetProps>(
    parts: InputParts,
    ...args: Array<InputArg | ((props: Props) => InputArg)>
  ) {
    function ResultComponent(props: Props & TargetProps) {
      const computedArgs = args.map((arg) =>
        typeof arg === "function" ? arg(props) : arg
      );

      const style = css(parts, ...computedArgs);

      useEffect(() => {
        insertStyle(style, true);
      }, [style]);

      return (
        <Target
          {...props}
          // Temporary code.
          {...({
            className: `${style.className} ${props.className ?? ""}`,
          } as any)}
        />
      );
    }

    return ResultComponent;
  }

  return createStyledComponent;
}

interface GlobalProps {
  style: NormalStyle;
}

function Global({ style }: GlobalProps) {
  useEffect(() => {
    insertStyle(style, false);
  }, [style]);

  return null;
}

// ===================================================================
// Public things.

export { css, keyframes, styled, Global };
