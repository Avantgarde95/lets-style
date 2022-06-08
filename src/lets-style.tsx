import { ComponentProps, ElementType, useEffect, useRef } from "react";
import { compile, middleware, serialize, stringify, prefixer } from "stylis";
import murmurhash from "murmurhash";

// ===============================================================
// Helper functions.

function clearElement(element: Element) {
  element.innerHTML = "";
}

function removeElement(element: Element) {
  element.parentNode?.removeChild(element);
}

function parseStyle(className: string, style: string) {
  return serialize(
    compile(`.${className} { ${style} }`),
    middleware([prefixer, stringify])
  );
}

// ===============================================================
// Core types.

interface Style {
  id: string;
  code: string;
}

type StyleParts = TemplateStringsArray;
type StyleArg = undefined | number | string | Style;

// ===============================================================
// Core functions.

function generateCode(inputParts: StyleParts, ...inputArgs: Array<StyleArg>) {
  const result: Array<string> = [];

  for (let i = 0; i < inputArgs.length; i++) {
    result.push(inputParts[i]);

    const arg = inputArgs[i];

    switch (typeof arg) {
      case "object":
        result.push(arg.code);
        break;
      case "number":
        result.push(`${arg}px`);
        break;
      case "string":
        result.push(arg);
        break;
      default:
        // Do nothing.
        break;
    }
  }

  result.push(inputParts[inputArgs.length]);

  return result.join("");
}

function css(parts: StyleParts, ...args: Array<StyleArg>): Style {
  const code = generateCode(parts, ...args);

  return {
    id: `${murmurhash(code)}`,
    code,
  };
}

function useStyle(style: Style) {
  const elementRef = useRef<HTMLStyleElement | null>(null);
  const className = `css-${style.id}`;

  useEffect(() => {
    if (elementRef.current === null) {
      elementRef.current = document.createElement("style");
      document.head.appendChild(elementRef.current);
    }

    clearElement(elementRef.current);

    elementRef.current.appendChild(
      document.createTextNode(`.${className} { ${style.code} }`)
    );

    return () => {
      if (elementRef.current !== null) {
        //removeElement(elementRef.current);
      }
    };
  }, [className, style.code]);

  return className;
}

function styled<TargetType extends ElementType>(Target: TargetType) {
  type TargetProps = ComponentProps<TargetType>;

  function createStyledComponent<Props = TargetProps>(
    parts: StyleParts,
    ...args: Array<StyleArg | ((props: Props) => StyleArg)>
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

// ===============================================================
// Exports.

export { css, useStyle, styled };
