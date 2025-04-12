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
import { build, fake } from "@jackfranklin/test-data-bot";

const buildLoginForm = build("LoginFrom",{
    fields:
        {
            username: fake(f => f.internet.userName()),
            password: fake(f => f.internet.password()),
        },
});
describe("test a Login form with a username and password", () => {
  test("Submit data", async () => {
    const mockLogin = jest.fn();
    const {username, password} = buildLoginForm();
    render(<Login onSubmit={mockLogin} />);

  
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(usernameInput, username);
    await userEvent.type(passwordInput, password);
    await userEvent.click(submitButton);

    expect(mockLogin).toHaveBeenCalledWith({
      username,
      password,
    });
  });
});
