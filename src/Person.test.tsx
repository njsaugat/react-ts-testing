import { render, screen } from "@testing-library/react";
import Person from "./Person";

//testing if the render is done right
test("renders a name", () => {
  render(<Person name="Jack" />);
  const linkElement = screen.getByText(/Name is Jack/i);
  expect(linkElement).toBeInTheDocument();
});

test("check the text in div", () => {
  render(<Person name="Jack" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Name is Jack");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
