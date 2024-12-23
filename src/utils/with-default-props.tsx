export function mergeProps<A, B>(a: A, b: B): A & B;
export function mergeProps<A, B, C>(a: A, b: B, c: C): A & B & C;
export function mergeProps<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
export function mergeProps(...args: any[]) {
  return args.reduce((acc, curr) => ({ ...acc, ...curr }), {});
}

export function mergeProp<T, DefaultT extends T = T>(
  defaultProp: DefaultT,
  ...propList: T[]
): T {
  for (let i = propList.length - 1; i >= 0; i -= 1) {
    if (propList[i] !== undefined) {
      return propList[i];
    }
  }
  return defaultProp;
}
