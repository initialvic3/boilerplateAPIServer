import globalReplace from "../globalReplace";
describe("globalReplace", () => {
  it("should replace tags globally", () => {
    const testString = "hello hello hello hello";
    const res = globalReplace(testString, "hello", "bye");
    expect(res).toEqual("bye bye bye bye");
  });
});
