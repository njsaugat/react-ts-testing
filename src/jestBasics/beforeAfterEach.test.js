let counter = 0;

beforeEach(() => {
  counter++;
  console.log(`Before each test - Counter:${counter}`);
});

afterEach(() => {
  counter = 100;
  console.log(`After each test - Counter:${counter}`);
});

test("test-1", () => {
  console.log("test 1");
  expect(counter).toBe(1);
});
test("test-2", () => {
  console.log("test 2");
  expect(counter).toBe(101);
});
