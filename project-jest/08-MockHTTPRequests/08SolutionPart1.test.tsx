import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import LoginSubmission from './LoginSubmission';
import "@testing-library/jest-dom";
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.post('https://auth-provider.example.com/api/login', (req, res, ctx) => {
    const { username, password } = req.body as { username?: string; password?: string };

    if (!username) {
      return res(
        ctx.status(400),
        ctx.json({ error: { message: "Username is required" } })
      );
    }
    if (!password) {
      return res(
        ctx.status(400),
        ctx.json({ error: { message: "Password is required" } })
      );
    }
    if (username === "user" && password === "password") {
      return res(ctx.json({ username }));
    } else {
      return res(
        ctx.status(403),
        ctx.json({ error: { message: "Invalid credentials" } })
      );
    }
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("../Login", () => ({
  __esModule: true,
  default: ({ onSubmit }) => (
    <div>
      <button onClick={() => onSubmit({ username: "user", password: "password" })}>
        Submit
      </button>
      <button onClick={() => onSubmit({ username: "", password: "password" })}>
        Submit Missing Username
      </button>
      <button onClick={() => onSubmit({ username: "user", password: "" })}>
        Submit Missing Password
      </button>
    </div>
  ),
}));

jest.mock("../spinner", () => ({
  __esModule: true,
  default: () => <div role="progressbar">Loading ...</div>,
}));

describe("LoginSubmission Part 1", () => {
  test("shows error when username is missing", async () => {
    render(<LoginSubmission />);
    fireEvent.click(screen.getByText("Submit Missing Username"));
    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));

    expect(screen.getByRole("alert")).toHaveTextContent("Unknown error");
  });

  test("shows error when password is missing", async () => {
    render(<LoginSubmission />);
    fireEvent.click(screen.getByText("Submit Missing Password"));
    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));

    expect(screen.getByRole("alert")).toHaveTextContent("Unknown error");
  });
});