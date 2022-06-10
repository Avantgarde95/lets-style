import { useEffect, ElementType, ComponentProps } from "react";
import { compile, middleware, serialize, stringify, prefixer } from "stylis";
import murmurhash from "murmurhash";

function hash(value: string) {
  return murmurhash(value).toString(16);
}

function parseStyle(style: string) {
  return serialize(compile(`${style}`), middleware([prefixer, stringify]));
}

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

type InputParts = TemplateStringsArray;
type InputArg = undefined | number | string | Style;

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
        }

        break;
      case "number":
        codeParts.push(`${arg}px`);
        break;
      case "string":
        codeParts.push(arg);
        break;
      default:
        // Do nothing.
        break;
    }
  }

  codeParts.push(parts[args.length]);

  const code = codeParts.join("");
  const id = hash(code);
  return { id, code, neededStyles };
}

const insertedStyleIDSet = new Set<string>();

function insertStyle(style: Style, wrap: boolean) {
  if (typeof document === "undefined") {
    return;
  }

  if (insertedStyleIDSet.has(style.id)) {
    return;
  }

  style.neededStyles.forEach((neededStyle) => {
    insertStyle(neededStyle, wrap);
  });

  const element = document.createElement("style");
  let content: string;

  if (!wrap) {
    content = style.code;
  } else if (style.type === "Normal") {
    content = `.${style.className} { ${style.code} }`;
  } else if (style.type === "Keyframes") {
    content = `@keyframes ${style.animationName} { ${style.code} }`;
  } else {
    throw new Error("Unexpected situation!");
  }

  element.appendChild(document.createTextNode(parseStyle(content)));
  document.head.appendChild(element);
  insertedStyleIDSet.add(style.id);
}

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

function useStyle(style: NormalStyle) {
  useEffect(() => {
    insertStyle(style, true);
  }, [style]);

  return style.className;
}

function styled<TargetType extends ElementType>(Target: TargetType) {
  type TargetProps = ComponentProps<TargetType>;

  function createStyledComponent<Props = TargetProps>(
    parts: InputParts,
    ...args: Array<InputArg | ((props: Props) => InputArg)>
  ) {
    const ResultComponent = (props: Props & TargetProps) => {
      const computedArgs = args.map((arg) =>
        typeof arg === "function" ? arg(props) : arg
      );

      const className = useStyle(css(parts, ...computedArgs));

      return (
        <Target
          {...props}
          // Temporary code.
          {...({ className } as any)}
        />
      );
    };

    return ResultComponent;
  }

  return createStyledComponent;
}

interface GlobalProps {
  style: NormalStyle;
}

const Global = ({ style }: GlobalProps) => {
  useEffect(() => {
    insertStyle(style, false);
  }, [style]);

  return null;
};

export { css, keyframes, useStyle, styled, Global };
