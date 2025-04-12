/* Mock Modules */

/* Mock the function using jest.mock() and jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
Mock the functions in the utils files, they are being used in the convertCase function.
Set up the mock functions before each test.

1. Test cases for the reverseString function
2. Test cases for the toLowerCase function
3. Test cases for the toUpperCase function
4. Test cases for the default case when it is unknown
5. Test cases for the empty string
*/
test("dummy test", () => {
  expect(true).toBe(true);
});

import { convertCase } from "./convertCase";
import {
  reverseString as mockReverseString,
  toUpperCase as mockToUpperCase,
  toLowerCase as mockToLowerCase,
} from "./utils";
// Import the functions to be mocked

// Mock the functions in the utils module
jest.mock("./utils", () => ({
  reverseString: jest.fn(),
  toUpperCase: jest.fn(),
  toLowerCase: jest.fn(),
}));

describe("convertCase", () => {
  // Set up the mock functions before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // Test cases for the convertCase function
  // Test cases for the reverseString function
  it("should reverse the string when mode is 'reverse'", () => {
    (mockReverseString as jest.Mock).mockReturnValue("cba");
    const result = convertCase("abc", "reverse");
    expect(mockReverseString).toHaveBeenCalledWith("abc");
    expect(result).toBe("cba");
  });
  // Test cases for the toUpperCase function
  it("should convert the string to uppercase when mode is 'upper'", () => {
    (mockToUpperCase as jest.Mock).mockReturnValue("ABC");
    const result = convertCase("abc", "upper");
    expect(mockToUpperCase).toHaveBeenCalledWith("abc");
    expect(result).toBe("ABC");
  });

  // Test cases for the empty string
  it("should handle empty strings correctly", () => {
    (mockReverseString as jest.Mock).mockReturnValue("");
    (mockToUpperCase as jest.Mock).mockReturnValue("");
    (mockToLowerCase as jest.Mock).mockReturnValue("");

    const reverseResult = convertCase("", "reverse");
    const upperResult = convertCase("", "upper");
    const lowerResult = convertCase("", "lower");

    expect(mockReverseString).toHaveBeenCalledWith("");
    expect(mockToUpperCase).toHaveBeenCalledWith("");
    expect(mockToLowerCase).toHaveBeenCalledWith("");

    expect(reverseResult).toBe("");
    expect(upperResult).toBe("");
    expect(lowerResult).toBe("");
  });

  // Test case for unknown mode
  it("should return the original string when mode is unknown", () => {
    const result = convertCase("abc", "unknown");
    expect(result).toBe("abc");
    expect(mockReverseString).not.toHaveBeenCalled();
    expect(mockToUpperCase).not.toHaveBeenCalled();
    expect(mockToLowerCase).not.toHaveBeenCalled();
  });
});
