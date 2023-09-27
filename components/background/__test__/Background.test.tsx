import React from "react";
import { render, screen } from "@testing-library/react";
import Background from "..";

const mockFn = jest.fn();
//! Base
let setValue: React.Dispatch<React.SetStateAction<boolean>>;
beforeEach(() => {
  setValue = mockFn;
});
const baseOfTest = (bol: boolean) => {
  React.useState = mockFn.mockImplementationOnce(() => [bol, setValue]);
  render(<Background />);
  const elm = screen.getByTestId("background");
  return { elm };
};

describe("Background", () => {
  test("check className in first render", () => {
    // React.useState = mockFn.mockImplementationOnce(() => [false, setValue]);
    // render(<Background />);
    // const elm = screen.getByTestId("background");
    const { elm } = baseOfTest(false);
    expect(elm).toHaveClass("opacity-100");
  });
  test("check className render the correct value", () => {
    // React.useState = mockFn.mockImplementationOnce(() => [true, setValue]);
    // render(<Background />);
    // const elm = screen.getByTestId("background");
    const { elm } = baseOfTest(true);
    expect(elm).toHaveClass("opacity-0");
  });
});
