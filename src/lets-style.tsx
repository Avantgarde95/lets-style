import { compile, middleware, serialize, stringify, prefixer } from "stylis";

export function parseStyle(className: string, style: string) {
  return serialize(
    compile(`.${className} { ${style} }`),
    middleware([prefixer, stringify])
  );
}
