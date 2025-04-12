# 07 - Form testing Part 1

## Background

Users spend a lot of time interacting with forms, and many of our forms are among the most essential parts of our application (like the "login" form of most apps). Because of this, it's critical to have confidence that they continue to work over time.

You need to ensure that the user can find inputs in the form, fill in their information, and validate that the submitted data is correct when they submit the form.

## Exercise

This exercise will test a Login form with a username and password. The form accepts an `onSubmit` handler, which the form data calls when the user submits it. Your job is to write a test for this form.

Make sure to keep your test implementation detail-free and refactor-friendly!
Remember the Jest’s "mock" function APIs. Rather than creating the `submittedData` variable, use a mock function and assert it was called correctly: