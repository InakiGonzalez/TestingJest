## New Challenge:

Testing library has more specific assertions for you to use:

- `toHaveTextContent` - checks if the element has the specified text content
- `toBeInTheDocument` - checks if the element is in the document
- `toBeVisible` - checks if the element is visible
- `toHaveAttribute` - checks if the element has the specified attribute
- `toHaveClass` - checks if the element has the specified class
- `toHaveStyle` - checks if the element has the specified style
- `toHaveValue` - checks if the element has the specified value

Swap the expect(message.textContent).toBe(...) for more specific assertion.
