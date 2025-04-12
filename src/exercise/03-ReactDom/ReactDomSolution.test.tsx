import React, { act } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";

beforeEach(() => {
  document.body.innerHTML = "";
});

test("counter increments and decrements when the buttons are clicked", () => {
  const div = document.createElement("div");
  document.body.append(div);

  const root = createRoot(div);
  act(() => root.render(<Counter />));
  const [increment, decrement] = div.querySelectorAll("button");
  const message = (div.firstChild as HTMLElement).querySelector("h1");

  expect(message!.textContent).toBe("Counter: 0");
  const incrementClickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    button: 0,
  });
  act(() => increment.dispatchEvent(incrementClickEvent));
  expect(message!.textContent).toBe("Counter: 1");
  const decrementClickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    button: 0,
  });
  act(() => decrement.dispatchEvent(decrementClickEvent));
  expect(message!.textContent).toBe("Counter: 0");
});
