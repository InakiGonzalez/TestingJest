# Introduction React Testing Library

## Background

React Testing Library is a lightweight solution for testing React components. It provides a simple API for rendering components, firing events, and asserting on the output. It encourages you to test your components to resemble how the end user will interact with them. This means that you should be testing the output of your components, not the implementation details. This is a good thing! It means that you can change the implementation of your components without having to change your tests. It also means that you can test your components in a way that resembles how the end user will interact with them.

[React Testing Library](https://testing-library.com/react) is the React
implementation of the [DOM Testing Library](https://testing-library.com)
(there's also a
[React Native Testing Library](https://testing-library.com/react-native) and
many others).
Here's a simple example of how to use this:


```javascript
import { render, fireEvent, screen } from "@testing-library/react";
import Users from "./Example/Users";

test("it works", () => {
  const { container } = render(<Users />);
  // container is the div that your component has been mounted onto.

  const input = container.querySelector("Users");
  if (input) {
    fireEvent.mouseEnter(input); // fires a mouseEnter event on the input
  }

  screen.debug(); // logs the current state of the DOM (with syntax highlighting!)
});
```

## React Testing Library has the following automatic features:

- It automatically cleans up the DOM after each test. This means you don't have to worry about cleaning up the DOM after each test. This is a good thing!
- It automatically wraps your tests in `act`, so you don't have to worry about wrapping them in `act`. This is a good thing!
- It automatically provides a `screen` object containing methods for querying the DOM. This means that you don't have to worry about querying the DOM. This is a good thing!
- It automatically provides you with a `fireEvent` object that contains methods for firing events. This means that you don't have to worry about firing events. This is a good thing!
- 

## Exercise

In this exercise, we're going to refactor the test of exercise 03 using React
Testing Library does for us. Check the simple example above.

