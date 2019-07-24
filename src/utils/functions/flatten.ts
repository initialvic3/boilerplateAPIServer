export const flatten = function(arr: any[], result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value: any[] = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

//Alternative
export const flatten2 = (arr: any[]): any[] =>
  arr.reduce(
    (flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next),
    []
  );
