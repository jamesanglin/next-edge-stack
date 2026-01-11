import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the main element", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders the heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /edit the page\.tsx file/i
    );
  });

  it("renders navigation links", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", { name: /deploy now/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /documentation/i })
    ).toBeInTheDocument();
  });
});
