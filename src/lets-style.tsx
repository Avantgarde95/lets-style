import {
  ComponentProps,
  ElementType,
  useEffect,
  useRef,
  useState,
} from "react";
import murmurhash from "murmurhash";
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

function generateStyleKey(style: string) {
  return `lets-style-${murmurhash(style)}`;
}

export function styled<TargetType extends ElementType>(Target: TargetType) {
  function createStyledComponent(
    styleParts: TemplateStringsArray,
    ...interpolations: Array<any>
  ) {
    const ResultComponent = (props: ComponentProps<TargetType>) => {
      const elementRef = useRef<HTMLStyleElement | null>(null);
      const [currentStyle, setCurrentStyle] = useState(styleParts.join(""));

      const styleKey = generateStyleKey(currentStyle);

      useEffect(() => {
        if (elementRef.current === null) {
          elementRef.current = document.createElement("style");
          document.head.appendChild(elementRef.current);
        }

        elementRef.current.appendChild(
          document.createTextNode(`.${styleKey} { ${currentStyle} }`)
        );

        return () => {
          if (elementRef.current !== null) {
            removeElement(elementRef.current);
          }
        };
      }, [styleKey]);

      return (
        <Target
          {...props}
          // Temporary code.
          {...({ className: styleKey } as any)}
        />
      );
    };

    return ResultComponent;
  }

  return createStyledComponent;
}
