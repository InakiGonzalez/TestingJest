// javascript
import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Counter from "../03-ReactDom/Counter";
import "@testing-library/jest-dom";

test("it works", () => {
  const { container } = render(<Counter />);
  // container is the div that your component has been mounted onto.

  const input = container.querySelector("input");
  fireEvent.mouseEnter(input); // fires a mouseEnter event on the input

  screen.debug(); // logs the current state of the DOM (with syntax highlighting!)
});

/*
React Testing Library has the following automatic features:
- It automatically cleans up the DOM after each test. This means that you
  don't have to worry about cleaning up the DOM after each test. This is a
  good thing!
- It automatically wraps your tests in `act`. This means that you don't
    have to worry about wrapping your tests in `act`. This is a good thing!
- It automatically provides you with a `screen` object that contains
  methods for querying the DOM. This means that you don't have to worry
  about querying the DOM. This is a good thing!
- It automatically provides you with a `fireEvent` object that contains
  methods for firing events. This means that you don't have to worry about
  firing events. This is a good thing!
*/

describe("Render Counter and fire events called increment and decrement", () => {
  test("counter increments and decrements when the buttons are clicked", () => {
    // Render the Counter component using React Testing Library
    const { container } = render(<Counter />);
    // container is the div that your co```````````11                 mponent has been mounted onto.
    // Get a reference to the increment and decrement buttons:
    const [increment, decrement] = container.querySelectorAll("button"); // change order [decrement, increment]
    // Get a reference to the message div:
    const message = container.firstElementChild?.querySelector("h1");

    // Check the initial count
    expect(message?.textContent).toBe("Counter: 0");
    // Simulate a click event on the increment and decrement button
    fireEvent.click(increment);
    expect(message?.textContent).toBe("Counter: 1");
    fireEvent.click(decrement);
    expect(message?.textContent).toBe("Counter: 0");
  });
});
