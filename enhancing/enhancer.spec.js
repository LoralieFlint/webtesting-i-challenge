const enhancer = require('./enhancer.js');
// test away!
const { repair, fail, succeed } = require("./enhancer.js");

describe("enhancer.js", () => {
    describe("repair() method", () => {
      it("should return durability to 100", () => {
        const item = {
          name: "staff",
          enhancement: 5,
          durability: 3
        };
        const expected = {
          name: "staff",
          enhancement: 5,
          durability: 100
        };
        const result = repair(item);
        expect(result).toEqual(expected);
      });
    })
})

describe("succeed() method", () => {
  it("should increase enhancement by 1 if enhancement < 20", () => {
    const item = {
      name: "staff",
      enhancement: 5,
      durability: 3
    };
    const expected = {
      name: "staff",
      enhancement: 6,
      durability: 3
    };
    const result = succeed(item);
    expect(result).toEqual(expected);
  });
  it("should not increase enhancement if enhancement >= 20", () => {
    const item = {
      name: "staff",
      enhancement: 21,
      durability: 3
    };
    const expected = {
      name: "staff",
      enhancement: 21,
      durability: 3
    };
    const result = succeed(item);
    expect(result).toEqual(expected);
  });
});

describe("fail() method", () => {
  it("should decrease durability by 5 if enhancement < 15", () => {
    const item = {
      name: "staff",
      enhancement: 14,
      durability: 10
    };
    const expected = {
      name: "staff",
      enhancement: 14,
      durability: 5
    };
    const result = fail(item);
    expect(result).toEqual(expected);
  });
  it("should decrease durability by 10 if enhancement >= 15", () => {
    const item = {
      name: "staff",
      enhancement: 15,
      durability: 15
    };
    const expected = {
      name: "staff",
      enhancement: 15,
      durability: 5
    };
    const result = fail(item);
    expect(result).toEqual(expected);
  });
  it("should decrease enhancement by 1 if enhancement > 16", () => {
    const item = {
      name: "staff",
      enhancement: 17,
      durability: 15
    };
    const expected = {
      name: "staff",
      enhancement: 16,
      durability: 5
    };
    const result = fail(item);
    expect(result).toEqual(expected);
  });
});