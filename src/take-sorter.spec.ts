import { expect } from "chai";
import { takeSorter } from "./take-sorter";

describe("takeSorter", () => {
  it("should return right value", () => {
    const field = "randomFieldName";
    const params = {
      sorter: {
        field,
        order: "descend",
      },
    };
    const result = takeSorter(params);
    expect(result).to.deep.equal({
      orderBy: {
        randomFieldName: "desc",
      },
    });
  });
});
