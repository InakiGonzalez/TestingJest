# Practice: User Account Component

## Exercise A

In this exercise, we will be testing a user account component. Create a new file called `UserAccount.test.js` in the `06-Practice-UserAccount` directory. In this file, we will write tests for the `UserAccount` component.

In this exercise, you will be testing the UserAccount component using React Testing Library. The UserAccount component receives a user prop and displays the user's name and edit button. You will write tests to check if the component renders correctly based on the user prop.

1. Test if the UserAccount component renders correctly with a user prop.
2. Test if the Edit button is displayed only when the user is a manager.
3. Test if the Edit button is not displayed when the user is not a manager.

Remember to prepare user test data per test.
Use the knowledge of previous exercises:
- Use the `render` method from React Testing Library to render the component.
- Use the `screen` object to query the DOM and check if the elements are rendered correctly.
- Events should be fired using `userEvent` instead of `fireEvent`.
- Use the `getByText` method to find elements by their text content.
- Use the `expect` method to assert the expected behavior of the component.
- And More ...

