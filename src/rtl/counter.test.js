import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Counter from "./Counter";
test("check if the button increments when clicked", async () => {
  render(<Counter />);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(0);

  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);
  fireEvent.click(buttonEl);
  fireEvent.click(buttonEl);
  fireEvent.click(buttonEl);
  fireEvent.click(buttonEl);
  fireEvent.click(buttonEl);
  fireEvent.click(buttonEl);

  // expect(counterEl).toHaveTextContent(7);

  await waitFor(() => {
    expect(counterEl).toHaveTextContent(10);
  });
});
