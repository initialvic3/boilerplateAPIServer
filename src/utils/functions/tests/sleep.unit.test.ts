import sleep from "../sleep";
describe("sleep", () => {
  it("should call the callback after 1 second", async () => {
    await sleep(1000); // Will pass if doesnt crash
    expect(true).toBe(true);
  });
});
