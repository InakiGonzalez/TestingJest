/* Exercise 2: Test using snapshots */

/* Mock the function using jest.fn().
Write three tests inside a describe block. You should use import the superHeros[] and getFlyingSuperHeros function.

1. First Test: 
Test should return an empty array if no superheros have the 'Fly' power"
2. Second Test:
Test should return an array of superHeros that have the 'Fly' power"
3. Third Test:
Test should match the snapshot of flying superheros.
The snapshot file should contain the expected output of the test.
The snapshot should be saved in a __snapshots__ directory next to the test file.
The snapshot file should be named SuperHeros.test.ts.snap.
*/
import { superHeros } from "./superHeros";

test("dummy test", () => {
  expect(true).toBe(true);
});

describe("superHeros with 'Fly' power", () => {
  let getFlyingSuperHeros: jest.Mock;

  beforeEach(() => {
    getFlyingSuperHeros = jest.fn(() =>
      superHeros.filter((hero) => hero.power.includes("Fly")),
    );
  });

  test("should return an empty array if no superheros have the 'Fly' power", () => {
    const mockNoFlyHeroes = [
      { name: "Hulk", power: ["Super Strength", "Regeneration"] },
      { name: "Batman", power: ["Intelligence"] },
    ];
    const result = mockNoFlyHeroes.filter((hero) => hero.power.includes("Fly"));
    expect(result).toEqual([]);
  });

  test("should return an array of superHeros that have the 'Fly' power", () => {
    const result = getFlyingSuperHeros();
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((hero) => hero.power.includes("Fly"))).toBe(true);
  });

  test("should match the snapshot of flying superheros", () => {
    const result = getFlyingSuperHeros();
    expect(result).toMatchSnapshot();
  });
});
