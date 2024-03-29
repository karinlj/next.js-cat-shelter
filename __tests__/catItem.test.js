import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CatItem from "../app/cats/CatItem";

describe("CatItem", () => {
  const testCat = {
    id: "1",
    date: "2024-03-06",
    name: "Lukas",
    description: "very short description",
    goOutside: false,
    foundHome: false,
  };
  const testCatLongDescription = {
    id: "1",
    date: "2024-03-06",
    name: "Lukas",
    description:
      "Cat ipsum dolor sit amet, tom norwegian forest cheetah and havana brown. Grimalkin cheetah lynx, so donskoy devonshire rex, or russian blue, but himalayan.",
    goOutside: false,
    foundHome: false,
  };

  it("renders the component prop", () => {
    render(<CatItem item={testCat} />);
    expect(screen.getByText(testCat.name)).toBeInTheDocument();
    //found a bug with this test! I had unnecessary dots in short description
    expect(screen.getByText(testCat.description)).toBeInTheDocument();
  });

  it("renders the component prop-description with ellipsis", () => {
    render(<CatItem item={testCatLongDescription} />);
    const excerpt = testCatLongDescription.description.slice(0, 150) + "...";
    expect(screen.getByText(excerpt)).toBeInTheDocument();
  });
});
