/**
 * Takes an array and splits it into larger array with chunks of size chunkSize.
 *
 * Floating point numbers are floored
 *
 * Numbers <= 0  return the whole array as one chunk
 *
 */
function chunkArray(array: any[], chunkSize: number) {
  const n = ~~chunkSize;
  if (n === 0 || chunkSize <= 0) return [array];
  const copiedArray = array.concat([]);
  const tempArray = [];
  for (let i = 0; i < array.length; i += n) {
    const chunk = copiedArray.slice(i, i + n);
    tempArray.push(chunk);
  }
  return tempArray;
}
export default chunkArray;
