# Avoid implementation details - Part 2

## Exercise: 

To use userEvent, you need to install the package if you haven't already. You can do this by running:

```bash
npm install @testing-library/user-event --save-dev
```

As it turns out, clicking these buttons is also an implementation detail. We're firing a single event when we should be firing several other events, like the user’s. When users click a button, they first move their mouse over it, which fires some mouse events. They'll also move their mouse down and up on the input and focus it.

If we want to be genuinely implementation-detail-free, we should also fire all those same events. Luckily, the Testing Library covers this with `@testing-library/user-event.` This may one day be baked directly into `@testing-library/dom,` but it's in a separate package for now.
For this extra credit, swap out `fireEvent` for `userEvent`, which you can get like so:

```javascript
import userEvent from "@testing-library/user-event";
```
