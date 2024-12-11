
export function mergeProps<A,B>(a:A, b: B) : A & B 
export function mergeProps<A,B,C>(a:A, b: B, c: C) : A & B & C
export function mergeProps<A,B,C,D>(a:A, b: B, c: C, d: D) : A & B & C & D
export function mergeProps(...args: any[]) {
    return args.reduce((acc, curr) => ({ ...acc, ...curr }), {});
}




export function mergeProp<T, P>(defaultProps: T, props: P) {
//   return { ...defaultProps, ...props };
}