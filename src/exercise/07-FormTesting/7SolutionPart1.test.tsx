/*
This exercise will test a Login form with a username and password. The form accepts an `onSubmit` handler, 
which the form data calls when the user submits it. Your job is to write a test for this form.

Make sure to keep your test implementation detail-free and refactor-friendly!
Remember the Jest’s "mock" function APIs. Rather than creating the `submittedData` variable, use a mock function 
and assert it was called correctly:
*/

import React from "react";
import Login from "../../../sharedComponent/Login";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("test a Login form with a username and password", () => {
  test("Submit data", async () => {
    const mockLogin = jest.fn();
    render(<Login onSubmit={mockLogin} />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(usernameInput, "lucas");
    await userEvent.type(passwordInput, "1234");
    await userEvent.click(submitButton);

    expect(mockLogin).toHaveBeenCalledWith({
      username: "lucas",
      password: "1234",
    });
  });
});
