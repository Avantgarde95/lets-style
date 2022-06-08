/**
 * @file Tools for applying the styles on the React components.
 */

import { useRef, useEffect, ElementType, ComponentProps } from "react";

import { clearElement, parseStyle } from "lets-style/Utils";
import { Style, StyleParts, StyleArg, css } from "lets-style/Style";

export function useStyle(style: Style) {
  const elementRef = useRef<HTMLStyleElement | null>(null);
  const className = `css-${style.id}`;

  useEffect(() => {
    if (elementRef.current === null) {
      elementRef.current = document.createElement("style");
      document.head.appendChild(elementRef.current);
    }

    clearElement(elementRef.current);

    elementRef.current.appendChild(
      document.createTextNode(parseStyle(`.${className} { ${style.code} }`))
    );

    return () => {
      if (elementRef.current !== null) {
        //removeElement(elementRef.current);
      }
    };
  }, [className, style.code]);

  return className;
}

export function styled<TargetType extends ElementType>(Target: TargetType) {
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

interface GlobalProps {
  style: Style;
}

export const Global = ({ style }: GlobalProps) => {
  const elementRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (elementRef.current === null) {
      elementRef.current = document.createElement("style");
      document.head.appendChild(elementRef.current);
    }

    clearElement(elementRef.current);

    elementRef.current.appendChild(
      document.createTextNode(parseStyle(style.code))
    );

    return () => {
      if (elementRef.current !== null) {
        //removeElement(elementRef.current);
      }
    };
  }, [style.code]);

  return null;
};
