import sleep from "../sleep";
import batchPerform from "../batchPerform";

describe("batchPerform", () => {
  const sampleDelayFn = async (o: any) => {
    await sleep(0);
    return o;
  };

  const errorThrowingFn = async (o: any) => {
    throw new Error("sample Error");
  };

  it("given valid array and chunkSize, perform callback in synchronous chunks", async () => {
    const array = Array.from({ length: 100 }, (v, k) => k);
    const res = await batchPerform(array, 10, sampleDelayFn);
    expect(res.length).toBe(100);
    expect(res).toEqual(array);
  });
  it("given valid array and chunkSize, lets all functions run even if errors thrown", async () => {
    const array = Array.from({ length: 100 }, (v, k) => k);
    const res = await batchPerform(array, 10, errorThrowingFn);
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(100);
    expect(res[0] instanceof Error).toBe(true);
  });
  it("given valid array and chunkSize, should return all results with promises resolved", async () => {
    const array = Array.from({ length: 100 }, (v, k) => k);
    const res = await batchPerform(array, 10, errorThrowingFn);
    expect(res[0] instanceof Promise).toBe(false);
  });
});
