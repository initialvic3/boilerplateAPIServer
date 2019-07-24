/**
 * Waits for each function to resolve its Promise before doing next
 */
const asyncForEach = async (
  array: any[],
  callback: (item: any, index: number, array: any[]) => any
) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
export default asyncForEach;
