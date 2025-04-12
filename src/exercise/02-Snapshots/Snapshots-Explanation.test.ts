/* Jest Snapshot Testing */
/* Jest provides a way to test the output of your code by taking a snapshot of the output
 and comparing it to a saved version. This is useful for ensuring that your code is correctly
  and consistently over time.

  The first time you run the test, it will create a snapshot file with the output of the test.
  Jest takes the data we pass to the assertion i.e. the string, object, or array and saves it in a snapshot file.
  The snapshot file is saved in a __snapshots__ directory next to the test file.
  The snapshot file contains the expected output of the test.
  
  The second time you the test, it will compare the output to the saved snapshot.
  if the output has changed, the test will fail and you will need to update the snapshot.
   */

// Run the test using the command: npm test <file-name>
// To update the snapshot, run the test with the -u flag: npm test -- -u
test("dummy test", () => {
  expect(true).toBe(true);
});

describe("Snapshot Testing", () => {
  // Test case for a simple string
  it("should match the snapshot for a simple string", () => {
    const str = "Hello, World!";
    expect(str).toMatchSnapshot();
  });

  // Test case for an object
  it("should match the snapshot for an object", () => {
    const obj = { name: "John", age: 31 }; // change de age to 31 when you want to update the snapshot. The snapshot will fail.
    expect(obj).toMatchSnapshot();
  });

  // Test case for an array
  it("should match the snapshot for an array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toMatchSnapshot();
  });
});
