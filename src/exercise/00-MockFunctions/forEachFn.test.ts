/* Exercise 0: Test the function by using a mock function */

/* Mock the function using jest.fn().
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

import { forEach } from "./forEach";

describe("forEach with jest.fn", () => {
  const mockCallback = jest.fn((x: number) => x + 6);
  const items = [0, 1, 4];

  beforeEach(() => {
    mockCallback.mockClear(); // Clean between tests
  });

  test("Should call the mock function 3 times", () => {
    forEach(items, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

  test("Should call the mock function with the correct arguments", () => {
    forEach(items, mockCallback);
    expect(mockCallback).toHaveBeenNthCalledWith(1, 0);
    expect(mockCallback).toHaveBeenNthCalledWith(2, 1);
    expect(mockCallback).toHaveBeenNthCalledWith(3, 4);
  });

  test("Should verify the return values of the mock function", () => {
    forEach(items, mockCallback);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.results[0].value).toBe(6);

    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[1].value).toBe(7);
  });

  test("should verify that result of third call is not 9", () => {
    forEach(items, mockCallback);
    expect(mockCallback.mock.calls[2][0]).toBe(4);
    expect(mockCallback.mock.results[2].value).not.toBe(9);
  });
});
