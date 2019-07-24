import filterObject from "../filterObject";

describe("filterObject", () => {
  it("should filter out object values given a filter function", () => {
    const testObject = { key1: "value1", key2: "value2", key3: "filterme" };
    const res = filterObject(testObject, (o: any) => o !== "filterme");
    expect(res).toEqual({ key1: "value1", key2: "value2" });
  });
});
