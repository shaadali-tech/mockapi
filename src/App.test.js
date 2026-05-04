import { render } from "@testing-library/react";

test("heading testing", () => {
  render(<App />);
  const headingElement = screen.getByText(/Here is the list of data/i);
  expect(headingElement).toBeInTheDocument();
});
