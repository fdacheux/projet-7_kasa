import { toKey } from "./toKey.util";

describe("The toKey function", () => {
  it("should return a string without diacritics, special characters and passes to lower case", () => {
    const expectedState = "aeiou3";
    expect(toKey("ÀéÎöù²&~\"#{}()[]'-|`_^@=+¨$¤£%*µ?,.;/:§!€<> 3")).toEqual(
      expectedState
    );
  });
});
