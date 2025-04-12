/* Exercise 0: Test the function by using a spyOn function */

/* Mock the function using spyOn
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
The mock function receives a prop of type number. The mocked function adds a 6 to the number.
1. First Test: 
The forEach function should be called 3 times
2. Second Test:
The forEach function should be called with the correct arguments.
3. Third Test:
Test the first argument of the first call to the function was 0 and the result is 6.
Test the first argument of the second call to the function was 1  and the result is 7.
4. Forth Test:
Test the first argument of the third call to the function was 4 and the result is not 9.
*/

test("dummy test", () => {
    expect(true).toBe(true);
  });


  import { forEach } from "./forEach";
import { jest } from "@jest/globals";
// Mock function jest.spyOn
const mockObject = {
  callback: (x: number) => x + 6,
};
const mockCallbackSpyOn = jest.spyOn(mockObject, "callback");
const items = [0, 1, 4];
describe("forEach", () => {
    beforeEach(() => {
        mockCallbackSpyOn.mockClear();
    });
    test("should call the mock function 3 times", () => {
        forEach(items, mockObject.callback);
        expect(mockCallbackSpyOn.mock.calls.length).toBe(3);
    });
    
    test("should call the mock function with the correct arguments", () => {
        forEach(items, mockObject.callback);
        expect(mockCallbackSpyOn.mock.calls[0]?.[0]).toBe(0);
        expect(mockCallbackSpyOn.mock.calls[1]?.[0]).toBe(1);
        expect(mockCallbackSpyOn.mock.calls[2]?.[0]).toBe(4);
    });
    
    test("should call the mock function and verify the correct result", () => {
        forEach(items, mockObject.callback);
        expect(mockCallbackSpyOn.mock.results[0]?.value).toBe(6);
        expect(mockCallbackSpyOn.mock.results[1]?.value).toBe(7);
    });
    test("should call the mock function and verify an incorrect result", () => {
        forEach(items, mockObject.callback);
        expect(mockCallbackSpyOn.mock.results[2]?.value).not.toBe(9);
    });
    });
// Compare this snippet from src/exercise/00-fn-funtion/forEachFn.test.ts:

