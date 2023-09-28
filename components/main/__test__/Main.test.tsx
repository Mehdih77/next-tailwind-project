import { render, screen } from "@testing-library/react";
import Main from "..";
describe("Main", () => {
  test("should contain specefic class", () => {
    render(<Main currentFramework="react" />);
    const elm = screen.getByTestId("main-light");
    expect(elm).toHaveClass("bg-blue-300");
    // expect(elm).toHaveClass("bg-green-300"); >>>>> FAILED
  });
});