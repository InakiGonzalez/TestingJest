# Practice: User List Component

## Exercise B

In this exercise, we will be testing a user list component. Create a new file called `UserList.test.js` in the `06-Practice-UserAccount` directory. In this file, we will write tests for the `UserList` component.
In this exercise, you will be testing the UserList component using React Testing Library. The UserList component receives a list of users and displays their names and edit buttons. You will write tests to check if the component renders correctly based on the user prop.

1. Test if the UserList component renders correctly with a list of users.
2. Test if the No users found message is displayed when the users prop is empty.
3. Test if the user names are displayed as links in the list.

** Remember to prepare user test data per test. **
Use the knowledge of previous exercises:

- Use the `render` method from React Testing Library to render the component.
- Use the `screen` object to query the DOM and check if the elements are rendered correctly.
- Events should be fired using `userEvent` instead of `fireEvent`.
- Use the `getByText` method to find elements by their text content.
- Use the `expect` method to assert the expected behavior of the component.
- And More ...

Use the following user data for your tests:

```javascript
const users = [
  { id: 1, name: "John Doe", isManager: true },
  { id: 2, name: "Jane Smith", isManager: false },
  { id: 3, name: "Alice Johnson", isManager: true },
];
```

```javascript
const emptyUsers = [];
```

```javascript
const singleUser = [{ id: 1, name: "John Doe", isManager: true }];
```

```javascript
const userWithNoName = [{ id: 1, name: "", isManager: true }];
```

```javascript
const userWithNoId = [
  { id: "", name: "John Doe", isManager: 'he },
];
```

```javascript
const userWithNoManager = [{ id: 1, name: "John Doe", isManager: false }];
```

```javascript
const userWithNoNameAndId = [{ id: "", name: "", isManager: false }];
```
