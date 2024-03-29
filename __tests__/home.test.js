import Page from "../app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("renders a heading with the text: The Cat Shelter Next.", () => {
    render(<Page />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("The Cat Shelter. (Next.js)");
  });

  it("renders 3 images", () => {
    render(<Page />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
  });
});
