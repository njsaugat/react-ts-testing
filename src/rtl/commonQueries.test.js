import { render, screen } from "@testing-library/react";
import TestForm from "./TestForm";

test("tests the basics rtl queries", () => {
  render(<TestForm />);
  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();

  const usernameElement = screen.getByTestId("username");
  expect(usernameElement).toHaveTextContent("Username");

  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveTextContent("Submit");

  const inputElement = screen.getByRole("input-username");
  expect(inputElement).toHaveAttribute("type", "text");

  expect(formElement).toBeVisible();

  expect(inputElement).toHaveValue("user-input");
});
