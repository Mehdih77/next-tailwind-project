import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../Footer";

test("render a text", () => {
  render(<Footer currentFramework="react" />);
  const myElm = screen.getByText("My Github Profile:");
  expect(myElm).toBeInTheDocument();
});
