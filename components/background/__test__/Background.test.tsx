import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Background from "..";
// import { act } from "react-dom/test-utils";

describe("Background", () => {
  let setValue: React.Dispatch<React.SetStateAction<boolean>>;
  beforeEach(() => {
    setValue = jest.fn();
  });
  test("check className in first render", () => {
    React.useState = jest.fn().mockImplementationOnce(() => [false, setValue]);
    render(<Background />);
    const elm = screen.getByTestId("background");
    expect(elm).toHaveClass("opacity-100");
  });

  test("check className render the correct value", async () => {
    React.useState = jest.fn().mockImplementationOnce(() => [true, setValue]);
    render(<Background />);
    const elm = screen.getByTestId("background");
    expect(elm).toHaveClass("opacity-0");
  });
});
