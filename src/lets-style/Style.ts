/**
 * @file Tools for creating the style instances.
 */

import { hash } from "lets-style/Utils";

export interface Style {
  id: string;
  type: "css" | "keyframes";
  code: string;
}

export type StyleParts = TemplateStringsArray;
export type StyleArg = undefined | number | string | Style;

function generateCode(parts: StyleParts, ...args: Array<StyleArg>) {
  const deque: Array<string> = [];

  for (let i = 0; i < args.length; i++) {
    deque.push(parts[i]);

    const arg = args[i];

    switch (typeof arg) {
      case "object":
        if (arg.type === "css") {
          deque.push(arg.code);
        } else if (arg.type === "keyframes") {
          const animationName = `animation-${arg.id}`;
          deque.unshift(`@keyframes ${animationName} { ${arg.code} }`);
          deque.push(animationName);
        }

        break;
      case "number":
        deque.push(`${arg}px`);
        break;
      case "string":
        deque.push(arg);
        break;
      default:
        // Do nothing.
        break;
    }
  }

  deque.push(parts[args.length]);

  return deque.join("");
}

export function css(parts: StyleParts, ...args: Array<StyleArg>): Style {
  const code = generateCode(parts, ...args);

  return {
    id: hash(code),
    code,
    type: "css",
  };
}

export function keyframes(parts: StyleParts, ...args: Array<StyleArg>): Style {
  const code = generateCode(parts, ...args);

  return {
    id: hash(code),
    code,
    type: "keyframes",
  };
}
