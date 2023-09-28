import { screen, render } from "@testing-library/react";
import TimeUnit from "..";
describe("TimeUnit", () => {
  test("should contain specefic className for react type", () => {
    render(<TimeUnit label="DAYS" currentFramework="react" value={30} />);
    const elm = screen.getByTestId("timeunit-label");
    expect(elm).toHaveClass("text-blue-300");
  });
  test("should contain specefic className for chrome type", () => {
    render(<TimeUnit label="MINUTES" currentFramework="chrome" value={30} />);
    const elm = screen.getByTestId("timeunit-label");
    expect(elm).toHaveClass("text-yellow-300");
  });
});