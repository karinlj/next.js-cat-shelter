import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AddForm from "../app/cats/add/AddForm";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("AddForm", () => {
  it("renders an input element", () => {
    render(<AddForm />);

    const inputElement = screen.getByLabelText("Name:");
    expect(inputElement).toBeInTheDocument();
  });

  it("button click triggers click event", () => {
    render(<AddForm />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
  });
});
