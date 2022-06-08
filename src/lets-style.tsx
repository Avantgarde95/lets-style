import { ComponentProps, ElementType, FC, useEffect, useRef } from "react";
import { compile, middleware, serialize, stringify, prefixer } from "stylis";

function removeElement(element: HTMLElement) {
  element.parentNode?.removeChild(element);
}

function parseStyle(className: string, style: string) {
  return serialize(
    compile(`.${className} { ${style} }`),
    middleware([prefixer, stringify])
  );
}

export function styled<AnyComponent extends FC | ElementType>(
  Component: AnyComponent
) {
  const StyledComponent = (props: ComponentProps<AnyComponent>) => {
    const elementRef = useRef<HTMLStyleElement | null>(null);

    useEffect(() => {
      if (elementRef.current === null) {
        elementRef.current = document.createElement("style");
        document.head.appendChild(elementRef.current);
      }

      return () => {
        if (elementRef.current !== null) {
          removeElement(elementRef.current);
        }
      };
    }, []);

    return <Component {...props} />;
  };

  return StyledComponent;
}
