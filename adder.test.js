const adder = require("./adder");

describe("adder", () => {
  it("should add two numbers in an array", () => {
    expect(adder([1, 1])).toBe(2);
  });
  it("should add three number in an array", () => {
    expect(adder([1, 2, 1])).toBe(4);
  });
  it("should add any number of elements in an array", () => {
    expect(adder([1, 2, 3, 4, 5])).toBe(15);
  });
  it("should add return 0 if an empty array is passed", () => {
    expect(adder([])).toBe(0);
  });
  it("should return a sole element of an array with sole element", () => {
    expect(adder([2])).toBe(2);
  });
  it("should return the sum of elements in a multidimensional array", () => {
    expect(adder([1, 2, [1, 2]])).toBe(6);
  });
  it("should return the sum of elements in a multidimensional array", () => {
    expect(adder([1, 2, [1, 2, [1, 2]]])).toBe(9);
  });
  it("should return the sum of elements in a multidimensional array", () => {
    expect(adder([1, 2, [1, 2, [1]]])).toBe(7);
  });
  it("should return the sum of elements in a multidimensional array", () => {
    expect(adder([[1, 2, [1], 1]])).toBe(5);
  });
  it("should return the sum of elements in a multidimensional array", () => {
    expect(
      adder([
        [1, 1],
        [1, 1],
      ])
    ).toBe(4);
  });
  it("should return the sum of elements in a multidimensional array", () => {
    expect(adder([1, [1, [1, [1, [1]]]]])).toBe(5);
  });
  it("should throw error for the sum of very large number elements in a multidimensional array", () => {
    expect(() => {
      adder([9999999999, 1]);
    }).toThrow("Very large number element in array!");
  });
});
