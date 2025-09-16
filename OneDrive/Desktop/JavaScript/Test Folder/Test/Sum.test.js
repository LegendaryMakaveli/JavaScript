const {add,substraction,multiplication} = require("../SourceCode/Sum.js");

test("test to add 2 + 1", () => {
    let result = add(2, 1);
    expect(result).toBe(3);
});

test("test to substract 4 - 2", () => {
    let result = substraction(4, 2);
    expect(result).toBe(2);
});

test("test to multiply 2 * 2", () => {
    let result = multiplication(2, 2);
    expect(result).toBe(4);
});