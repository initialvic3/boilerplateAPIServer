import chunkArray from "../chunkArray";

describe("chunkArray", () => {
  it("given valid array and chunkSize, should split array into chunks of size chunkSize", () => {
    const array = Array.from({ length: 100 }, (v, k) => k);
    const chunks = chunkArray(array, 10);
    expect(chunks.length).toBe(10);
    expect(chunks[0].length).toBe(10);
  });

  it("given empty array, should still work and return empty array", () => {
    const chunks = chunkArray([], 10);
    expect(chunks.length).toBe(0);
    expect(chunks).toEqual([]);
  });
  it("given chunkSize of 0, should return with array as a chunk", () => {
    const array = [0, 1, 2, 3, 4, 5];
    const chunks = chunkArray(array, 0);
    expect(chunks.length).toBe(1);
    expect(chunks[0]).toEqual(array);
  });
  it("given floating point numbers, should floor them", () => {
    const array = Array.from({ length: 100 }, (v, k) => k);
    const chunks = chunkArray(array, 10.89);
    expect(chunks.length).toBe(10);
    expect(chunks[0].length).toBe(10);
  });
  it("given negative numbers, should return with array as a chunk", () => {
    const array = [0, 1, 2, 3, 4, 5];
    const chunks = chunkArray(array, -5.5);
    expect(chunks.length).toBe(1);
    expect(chunks[0]).toEqual(array);
  });
});
