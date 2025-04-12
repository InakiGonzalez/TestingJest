# 07 - Form testing Part 2

## Exercise: Dynamic Test Data

Now that you have implemented the first part, this exercise will help simplifying the maintenance of the tests by reducing the amount of unrelated fat in the test. You want to make it so the code for the test communicates what's important and what is not. In this case, the test is about the form being able to submit the values correctly. The values themselves are not important, and therefore we are going to replace them with dynamically generated values.

```tsx
const username = "testuser";
const password = "password123";
```

So, Let's replace the values with a custom `buildLoginForm` function that generates random
values. Use the `@jackfranklin/test-data-bot` package to generate the data, install version 1.4.0. You can use the `build` and `fake` functions to create a random username and password.

```tsx
import { build } from "@jackfranklin/test-data-bot";
```


```bash
npm install @jackfranklin/test-data-bot@1.4.0 --save-dev
```

We are installing the version 1.4.0 of the package to utilize the `build` and `fake` functions for generating random data. Prior to the v2.0.0 the faker library was included in the package, but it has since been separated into its own package. This change allows for more flexibility and control over the data generation process. If you want to user the most recent faker verison, you can install it separately. 

```tsx
import {build, perBuild} from '@jackfranklin/test-data-bot';

// This can be any fake data library you like.
import fake from 'faker';

const userBuilder = build({
  // Within perBuild, call your faker library directly.
  name: perBuild(() => fake.name.findName()), // Updated to use the correct faker method
})
```
I am using @jackfranklin/test-data-bot@1.4.0 because Nextive does not allow the faker library to be used directly.
The `build` function creates a new builder, and the `perBuild` function allows you to define a custom value for each build. In this case, we are using the `fake.name.findName()` method to generate a random name.