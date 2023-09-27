import { render, screen } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
  test("render github text", () => {
    render(<Footer currentFramework="react" />);
    const myElm = screen.getByText("My Github Profile:");
    expect(myElm).toBeInTheDocument();
  });
  test("render link", () => {
    render(<Footer currentFramework="react" />);
    const linkElm = screen.getByRole("link", { name: /go to github/i });
    expect(linkElm).toHaveAttribute("href", "https://github.com/Mehdih77");
  });
});