import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import LoginSubmission from './LoginSubmission';
import "@testing-library/jest-dom";
import * as React from "react";

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { handlers } from './mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Use a modified Login mock that renders three buttons for different scenarios.
jest.mock("../Login", () => ({
  __esModule: true,
  default: ({ onSubmit } : { onSubmit: (data: { username?: string; password?: string }) => void }) => (
    <div>
      {/* Successful submission */}
      <button onClick={() => onSubmit({ username: "user", password: "password" })}>Submit</button>
      {/* Missing username */}
      <button onClick={() => onSubmit({ username: "", password: "password" })}>Submit Missing Username</button>
      {/* Missing password */}
      <button onClick={() => onSubmit({ username: "user", password: "" })}>Submit Missing Password</button>
    </div>
  ),
}));

jest.mock("../spinner", () => ({
  __esModule: true,
  default: () => <div role="progressbar">Loading ...</div>,
}));


describe("LoginSubmission (with MSW)", () => {
    test("should log in successfully and display the welcome message", async () => {
      render(<LoginSubmission />);
      
      fireEvent.click(screen.getByText("Submit"));
  
      await waitForElementToBeRemoved(() => screen.getByRole('progressbar'));
      
      expect(screen.getByText(/Welcome/)).toBeInTheDocument();
      expect(screen.getByText("user")).toBeInTheDocument();
    });
  
    test("should display an error message when username is missing", async () => {
      render(<LoginSubmission />);
      
      fireEvent.click(screen.getByText("Submit Missing Username"));
      
      await waitForElementToBeRemoved(() => screen.getByRole('progressbar'));
      
      expect(screen.getByRole("alert")).toMatchInlineSnapshot(`
<div
  role="alert"
  style="color: red;"
>
  Unknown error
</div>
`);
    });
  
    test("should display an error message when password is missing", async () => {
      render(<LoginSubmission />);
      
      fireEvent.click(screen.getByText("Submit Missing Password"));
      
      await waitForElementToBeRemoved(() => screen.getByRole('progressbar'));
      
      expect(screen.getByRole("alert")).toMatchInlineSnapshot(`
<div
  role="alert"
  style="color: red;"
>
  Unknown error
</div>
`);
    });
  
    test("should display an error message for invalid credentials", async () => {
      server.use(
        rest.post("https://auth-provider.example.com/api/login", (req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json({ message: "Invalid username or password" })
          );
        })
      );
      
      render(<LoginSubmission />);
      fireEvent.click(screen.getByText("Submit"));
      
      await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));
      
      expect(screen.getByRole("alert")).toMatchInlineSnapshot(`
<div
  role="alert"
  style="color: red;"
>
  Invalid username or password
</div>
`);
    });
  });