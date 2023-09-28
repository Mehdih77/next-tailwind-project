# Document

Test with jest and testing-library

### ⚡️ AAA Patern: Arrange , Act , Assert

Arange: precondition for tests

Act: functions, clicks, renders and ...

Example:

```
 test("Testing React", () => {

   // Arrange
   const container = document.createElement("div");
   document.body.appendChild(container);

   // Act
   act(() => {
     render(<App />, container);
   });
   render(<App />, container);

   // Assert
   expect(container.textContent).toBe("Hello");
   unmountComponentAtNode(container);
   container.remove();

 });
```

### ⚡️ Setup & Teardown:

setup : execute before any test

teardown : execute after any test

### ⚡️ Describe:

describe => use for better organization

## Related

Here are some related and useful links

[jestjs](https://jestjs.io/docs/getting-started)

[testing-library](https://testing-library.com)

[jest-dom](https://github.com/testing-library/jest-dom)

[msw](https://mswjs.io)

[eslint-plugin-jest-dom](https://www.npmjs.com/package/eslint-plugin-jest-dom)
