/* Exercise 3 ReactDom: Test using ReactDOM */

/*
Background:
When it comes to React components, our developer user will render our component
with `react-dom`'s `createRoot` API (similar concept for React Native) and in
some cases they'll pass props and/or wrap it in a context provider. The end user
will click buttons and assert on the output.

Exercise:
Import the counter component from the `Counter.tsx` file and test the following:
1. The component should render the Counter component
2. The component should render the Increment and Decrement buttons
3. The component should increment the count when the Increment button is clicked
4. The component should decrement the count when the Decrement button is clicked

To do this, you'll need to create a DOM node, add it to the body, and render the
component to that DOM node. You'll also need to clean up the DOM when your test
is finished so the next test has a clean DOM to interact with.

Default imports
*/
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";

// Do not forget to do a beforeEach to clear the DOM before each test
describe("Counter Component", () => {
  beforeEach(() => {
    //Clear the DOM
    document.body.innerHTML = "";
  });
  test("counter increments and decrements when the buttons are clicked", () => {
    // Create a div to render your component to (document.createElement)
    const div = document.createElement("div");
    // Append the div to document.body (document.body.append)
    document.body.append(div);
    // Use createRoot to render the <Counter /> to the div
    const root = createRoot(div);
    act(() => {
      root.render(<Counter />);
    });
    // Get a reference to the increment and decrement buttons:
    //      div.querySelectorAll('button')
    const [incrementBtn, decrementBtn] = div.querySelectorAll("button");
    // Get a reference to the message div:
    //   Div.firstChild.querySelector('div')
    const message = (div.firstChild as HTMLElement).querySelector("h1");

    // Expect the message.textContent toBe 'Current count: 0'
    expect(message?.textContent).toBe("Counter: 0");
    // Click the increment button (act(() => increment.click()))
    // Assert the message.textContent
    act(() => {
      incrementBtn.click();
    });
    expect(message?.textContent).toBe("Counter: 1");
    // Click the decrement button (act(() => decrement.click()))
    // Assert the message.textContent
    act(() => {
      decrementBtn.click();
    });
    expect(message?.textContent).toBe("Counter: 0");
    // Cleanup by removing the div from the page (div.remove())
    // Ff you don't cleanup, then it could impact other tests and/or cause a memory leak
  });
});
