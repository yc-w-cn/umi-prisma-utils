import { expect } from "chai";
import { takeCondition } from "./take-condition";

describe("takeCondition", () => {
  const params = {
    notMatchAny: "Hello World",
    orderDeliveryTime: "NOON",
    orderDeliveryStatus: "DELIVERED",
    orderDeliveryAddress: "RANDOM_KEYWORD_WORDS",
    booleanTest: false,
    date: "2023-2-23",
  };
  it("should return right value", () => {
    const defines = [
      ["orderDeliveryTime", "orderDeliveryTime", "equals"],
      ["orderDeliveryStatus", "databaseOrderDeliveryStatus", "equals", "raw"],
      ["orderDeliveryAddress", "orderDeliveryAddress", "contains"],
      ["booleanTest", "booleanTest", "equals"],
      ["date", "date", "equals", "date"],
    ];
    const result = takeCondition(params, defines);
    expect(result).to.deep.equal({
      orderDeliveryTime: {
        equals: "NOON",
      },
      databaseOrderDeliveryStatus: {
        equals: "DELIVERED",
      },
      orderDeliveryAddress: {
        contains: "RANDOM_KEYWORD_WORDS",
      },
      booleanTest: {
        equals: false,
      },
      date: {
        equals: new Date("2023-2-23"),
      },
    });
  });
});
