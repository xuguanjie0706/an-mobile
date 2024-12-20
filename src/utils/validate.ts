import { canUseDom } from "./can-use-dom";

export const isPromise = (value: unknown): value is Promise<unknown> => {
  return value instanceof Promise;
};




export function isAndroid(): boolean {
  return canUseDom ? /android/.test(navigator.userAgent.toLowerCase()) : false
}

export function isIOS(): boolean {
  return canUseDom
    ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
    : false
}


export function isDef<T>(val: T): val is NonNullable<T> {
  return typeof val !== 'undefined' && val !== null
}
