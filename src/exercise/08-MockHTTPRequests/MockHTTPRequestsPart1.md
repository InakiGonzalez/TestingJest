# 07 - Mock HTTP Requests with MSW Part 1

## Background

Mocking HTTP requests is a common practice in testing to isolate the component being tested from external dependencies. This allows you to test the component's behavior without relying on actual network requests, which can be slow and unreliable.

[MSW](https://mswjs.io/)
The MSW (Mock Service Worker) library is a powerful tool for mocking HTTP requests in both client-side and server-side applications. It intercepts **network requests and provides mock responses**, allowing you to test your application in isolation from external APIs. MSW allows you to define request handlers that specify how to respond to specific HTTP requests. You can create handlers for different HTTP methods (GET, POST, PUT, DELETE) and specify the URL patterns to match.You can also define custom response bodies, status codes, and headers to simulate various scenarios.

MSW is particularly useful in React and TypeScript projects because it integrates seamlessly with modern testing frameworks like Jest, React Testing Library, and Cypress.

Key Features of MSW:

1. Request Interception: MSW intercepts HTTP requests (e.g., fetch, axios) at the network level, so your application doesn't need to be modified to use it.
2. Mock Responses: You can define handlers to return mock responses for specific API endpoints, simulating real-world scenarios like success, errors, or delays.
3. Works in Browser and Node.js: MSW can mock requests in the browser during development or in Node.js during testing.
4. TypeScript Support: MSW provides TypeScript types, making it easier to write type-safe mock handlers.
5. Realistic Testing: By mocking requests at the network level, MSW ensures your tests closely mimic real-world behavior.

Install MSW:

```bash
npm install msw@1.3.5 --save-dev
```

Since fetch isn't supported in JSDOM/Node, we have to install the `whatwg-fetch`
dev dependency which will polyfill fetch in our testing environment which will allow MSW to handle those requests for us.

```bash
npm i whatwg-fetch --save-dev
```

## Example Use Case

Suppose you're testing a React component that fetches user data from an API. Instead of relying on the actual API, you can use MSW to mock the API response, ensuring your tests are fast, reliable, and independent of external services.

We'll be using a tool called for this. Here's an
example of how you can use msw for tests:

```javascript
// __tests__/fetch.test.js
import * as React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Fetch from "../fetch";
// Define Mock Hanlder
const server = setupServer(
  // Mock GET request to /greeting
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" })); // Mock response
  })
);

beforeAll(() => server.listen()); // Start the mock server before tests
afterEach(() => server.resetHandlers()); // Reset handlers after each test
afterAll(() => server.close()); // Stop the server after all tests

test("loads and displays greeting", async () => {
  render(<Fetch url="/greeting" />);

  await userEvent.click(screen.getByText("Load Greeting"));

  await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});

test("handles server error", async () => {
  server.use(
    rest.get("/greeting", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Fetch url="/greeting" />);

  await userEvent.click(screen.getByText("Load Greeting"));

  await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
});
```

### Explanation of the Code

```javascript
const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);
```

1. setupServer:
   It creates a mock server that intercepts HTTP requests made by your application during tests. This allows you to simulate API responses without actually making network calls.
2. rest.get:
   This is a helper method from msw to define a mock handler for HTTP GET requests.
   The first argument ('/greeting') specifies the endpoint to intercept. In this case, it intercepts requests to /greeting.
3. Request Handler Function:
   The second argument is a callback function (req, res, ctx) that defines how the server should respond to the intercepted request.
   - req: Represents the intercepted request. You can inspect its properties (e.g., headers, query parameters, body) if needed.
   - res: A function used to construct the mock response.
   - ctx: A utility object that provides helpers for building the response, such as ctx.json for JSON responses.
4. Mock Response:
   Inside the handler, res(ctx.json({greeting: 'hello there'})) is used to return a mock response:
   - ctx.json({greeting: 'hello there'}): Creates a JSON response with the body {greeting: 'hello there'}.
   - res(...): Sends the response back to the client.
5. server:
   The setupServer function returns a server instance, which you can use to control the mock server during your tests (e.g., starting, stopping, or resetting it).

## Exercise

In this exercise, you will rewrite the test that connects the login form with a backend request for when
the user submits the form. You will mock HTTP requests using the `msw` library.
We'll use `waitForElementToBeRemoved` to wait for the loading indicator to go away.
You can use `screen.debug()` to see the current state of the DOM.
x

Additionally, Add test cases to verify the behavior when the username or password is missing.
You can expect to see an error message indicating that the password is required.
