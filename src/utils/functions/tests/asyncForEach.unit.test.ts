import asyncForEach from "../asyncForEach";
describe("asyncForEach", () => {
  it("should call function once per item in array", async () => {
    const mockFn = jest.fn();
    await asyncForEach(["item", 2, undefined, null], mockFn);
    expect(mockFn.mock.calls.length).toBe(4);
  });
  it("should call function with arguments in correct order", async () => {
    const mockFn = jest.fn();
    await asyncForEach(["item", [2, 3], undefined, null], mockFn);
    expect(mockFn.mock.calls[0][0]).toBe("item");
    expect(mockFn.mock.calls[1][0]).toEqual([2, 3]);
    expect(mockFn.mock.calls[2][0]).toBe(undefined);
    expect(mockFn.mock.calls[3][0]).toBe(null);
  });
});
