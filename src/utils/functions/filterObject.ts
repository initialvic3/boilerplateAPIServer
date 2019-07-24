/**
 * Filters each value in objects
 */
const filterObject = (o: any, fn: Function): any => {
  return Object.keys(o)
    .filter((key: string) => fn(o[key]))
    .reduce((obj: any, key) => {
      obj[key] = o[key];
      return obj;
    }, {});
};
export default filterObject;
