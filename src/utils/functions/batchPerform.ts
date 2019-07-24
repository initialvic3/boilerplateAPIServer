import chunkArray from "./chunkArray";

/**
 * Synchronously performs asynchronous function in chunks of chunkSize
 */
async function batchPerform<T>(
  array: any[],
  chunkSize: number,
  callback: (o: any) => Promise<T[]>
): Promise<T[]> {
  const chunks = chunkArray(array, chunkSize);
  const results = [];
  for (let i = 0; i < chunks.length; i++) {
    const promises = chunks[i].map(callback);
    results.push(await Promise.all(promises.map(p => p.catch(e => e))));
  }
  return results.reduce((acc, v) => acc.concat(v), []);
}
export default batchPerform;
