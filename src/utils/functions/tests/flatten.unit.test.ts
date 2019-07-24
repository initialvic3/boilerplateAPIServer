import { flatten } from "../flatten";

describe("flatten", () => {
  it("should return empty array flattening empty array", () => {
    const res = flatten([]);
    expect(res).toEqual([]);
  });

  it("should flatten 2 layer nested arrays ", () => {
    const res = flatten([["hi"], "hi"]);
    expect(res).toEqual(["hi", "hi"]);
  });

  it("should flatten 3 layer nested arrays ", () => {
    const res = flatten([["hi", ["hi"]], "hi"]);
    expect(res).toEqual(["hi", "hi", "hi"]);
  });

  it("should flatten n layer nested arrays", () => {
    const res = flatten([[[[[[[[[["hi"]]], "hi"]]], "hi"]]]]);
    expect(res).toEqual(["hi", "hi", "hi"]);
  });
});
