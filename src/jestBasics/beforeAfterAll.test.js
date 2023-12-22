let counter = 0;

beforeAll(() => {
  counter++;
  console.log(`Before all tests -counter: ${counter}`);
});
afterAll(() => {
  counter = 0;
  console.log(`After all tests- counter: ${counter}`);
});

test("11", () => {
  console.log("Test 1");
  expect(counter).toBe(1);
});

test("222", () => {
  console.log("Test 2");
  expect(counter).toBe(1);
});
