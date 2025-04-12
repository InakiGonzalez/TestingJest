// Create a function that converts a string depending on the given case.

import { reverseString, toLowerCase, toUpperCase } from "./utils";


export type CaseType = "upper" | "lower" | "reverse" | "unknown";
// The function should take two arguments: the string and the case type.
export function convertCase(str: string, caseType: CaseType): string {
    // Depending on the case type, it should return the string in the desired case.
    switch (caseType) {
      case "upper":
        return toUpperCase(str);
      case "lower":
        return toLowerCase(str);
      case "reverse":
        return reverseString(str);
      default:
        return str;
    }
  }