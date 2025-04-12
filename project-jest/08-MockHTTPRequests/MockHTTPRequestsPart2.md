# 07 - Mock HTTP Requests with MSW Part 2

## Exercise Externalize Mock Handlers

I use a mock server while developing my applications. It's often more reliable, works offline, doesn't require extensive environment setup, and allows developers to start writing UI for APIs that aren't finished yet.

MSW was initially built for this use case, and we can implement this server handler for our app externally.  To use this, you can move and import the array of server handlers and send it to the `setupServer` call. 


## ExerciseÑ Inline Snackshots for error messages

Copying and pasting the output into your test assertions (like the error messages ) is not enjoyable, especially if that error message were to change in the future. Instead, we can utilize a special assertion to take a "snapshot" of the error message, and Jest will update our code. Use `toMatchInlineSnapshot` instead of making an explicit assertion on that error element.

[Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)
