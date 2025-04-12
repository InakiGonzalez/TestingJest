# Avoid implementation details - Part 1

## Background

One of the most important things to remember when testing our software and its use is to avoid testing implementation details. "Implementation details" refers to how an abstraction accomplishes a specific outcome. Thanks to the expressiveness of code, you can typically achieve the same result using completely different implementation details. For example:

```javascript
multiply(4, 5) // 20
```

The `multiply` function can be implemented in basically infinite ways. Here are
two examples:

```javascript
const multiply = (a, b) => a * b
```

vs

```javascript
function multiply(a, b) {
  let total = 0
  for (let i = 0; i < b; i++) {
    total += a
  }
  return total
}
```

## Exercise

Our current tests rely on implementation details. You can tell whether tests rely on implementation details if they're written in a way that would fail if the implementation changes. For example, what if we wrapped our counter component in another `div` or swapped our message from a `div` to a `span` or `p`? Or what if we added another button for `reset`? 
