import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../sharedComponent/Counter";

describe("Render Counter and fire events called increment and decrement", () => {
  test("counter increments and decrements when the buttons are clicked", async() => {
    // Render the Counter component using React Testing Library
    render(<Counter />);
    const user = userEvent.setup();

    expect(screen.getByRole("heading", { name: /counter: 0/i })).toBeInTheDocument();
    // Increment
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementButton);
    expect(screen.getByRole("heading")).toHaveTextContent("Counter: 1");

    // Decrement
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    await user.click(decrementButton);
    expect(screen.getByRole("heading")).toHaveTextContent("Counter: 0");
  
  });
});