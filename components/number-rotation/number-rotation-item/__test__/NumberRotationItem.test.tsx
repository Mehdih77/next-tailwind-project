import { screen, render } from "@testing-library/react";
import NumberRotationItem from "..";
describe("NumberRotationItem", () => {
  test("if number === num should render specefic className", () => {
    render(<NumberRotationItem num={30} number={30} />);
    const elm = screen.getByTestId("NumberRotationItem");
    expect(elm).toHaveClass("opacity-100 transform-none");
  });
  test("if number > num should render specefic className", () => {
    render(<NumberRotationItem num={30} number={40} />);
    const elm = screen.getByTestId("NumberRotationItem");
    expect(elm).toHaveClass("opacity-0 -translate-y-2");
  });
  test("if number < num should render specefic className", () => {
    render(<NumberRotationItem num={40} number={30} />);
    const elm = screen.getByTestId("NumberRotationItem");
    expect(elm).toHaveClass("opacity-0 translate-y-2");
  });
});