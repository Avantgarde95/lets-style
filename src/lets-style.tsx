import { ComponentProps, ElementType, useEffect, useRef } from "react";
import { compile, middleware, serialize, stringify, prefixer } from "stylis";
import murmurhash from "murmurhash";

// ===============================================================
// Helper functions.

function removeElement(element: HTMLElement) {
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
  key: string;
  code: string;
}

// ===============================================================
// Core functions.

function css(
  parts: TemplateStringsArray,
  ...interpolations: Array<any>
): Style {
  const code = parts.join("");

  return {
    key: `${murmurhash(code)}`,
    code,
  };
}

function useStyle(style: Style) {
  const elementRef = useRef<HTMLStyleElement | null>(null);
  const className = `css-${style.key}`;

  useEffect(() => {
    if (elementRef.current === null) {
      elementRef.current = document.createElement("style");
      document.head.appendChild(elementRef.current);
    }

    elementRef.current.appendChild(
      document.createTextNode(`.${className} { ${style.code} }`)
    );

    return () => {
      if (elementRef.current !== null) {
        removeElement(elementRef.current);
      }
    };
  }, [className]);

  return className;
}

function styled<TargetType extends ElementType>(Target: TargetType) {
  function createStyledComponent(
    styleParts: TemplateStringsArray,
    ...interpolations: Array<any>
  ) {
    const ResultComponent = (props: ComponentProps<TargetType>) => {
      const className = useStyle(css(styleParts));

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
