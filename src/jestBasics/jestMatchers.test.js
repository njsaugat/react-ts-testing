// toBe mathcer
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// toEqual
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

//not matcher
test("adding positive numbers is not zero", () => {
  expect(1 + 2).not.toBe(0);
});

// toMatch mathcer
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// toBeTruthy/ toBeFalsy
test("truthy and falsy", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

// toBeNull/ toBeUndefined
test("null or undefined", () => {
  const value = null;
  expect(value).toBeNull();
  expect(value).not.toBeUndefined();
});

test("check using toBe", () => {
  const val = { hey: 1 };
  const shallowCopy = val;
  expect(val).toBe(shallowCopy);
  // const deepCopy = { ...val };
  // expect(val).toBe(deepCopy);
});

/**
 * toBe -->check for same mem ref and strict equality
 * toEqual --> strict equality only ie check for structure and not same ref
 * not --> negation
 * toMatch --> check against regular expressions
 * toBeFalsy --> check for falsy
 * toBeTruthy --> check for truthy
 * toBeNull --> check if null
 * toBeUndefined --> check if undefined or not
 *
 */
