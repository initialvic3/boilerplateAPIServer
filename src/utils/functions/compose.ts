const compose = (...functions: any[]) => (args: any) =>
  functions.reduceRight((arg, fn) => fn(arg), args);
export default compose;
