import { expect } from "chai";
import { takePagination } from "./take-pagination";

describe("takePagination", () => {
  it("should return right value", () => {
    const params = {
      current: 1,
      pageSize: 10,
    };
    const result = takePagination(params);
    expect(result).to.deep.equal({
      skip: 0,
      take: 10,
    });
  });
});
