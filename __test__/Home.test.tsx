import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/layouts/Home";
// import userEvent from "@testing-library/user-event"
// import { act } from "react-dom/test-utils";

describe("Home", () => {
  test("home page should contain html", () => {
    render(<Home />);
    const mainElm = screen.getByRole("main");
    expect(mainElm).toContainHTML("div");
  });
});

// test.todo("Todooooo a test")