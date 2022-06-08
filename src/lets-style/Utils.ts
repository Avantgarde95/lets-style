/**
 * @file Util functions used inside the library.
 */

import { compile, middleware, serialize, stringify, prefixer } from "stylis";
import murmurhash from "murmurhash";

export function clearElement(element: Element) {
  element.innerHTML = "";
}

export function removeElement(element: Element) {
  element.parentNode?.removeChild(element);
}

export function hash(value: string) {
  return murmurhash(value).toString(16);
}

export function parseStyle(style: string) {
  return serialize(compile(`${style}`), middleware([prefixer, stringify]));
}
