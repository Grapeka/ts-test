import { ManageArray } from "../src/ManageArray";

describe("Merge", () => {
  it("should merge two arrays", () => {
    const manageArray = new ManageArray();
    const result = manageArray.merge([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
