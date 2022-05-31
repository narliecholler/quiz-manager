import Header from "..";
import { render, screen } from "@testing-library/react";

const items = [
  {
    name: "test name",
    link: "test-link",
  },
];

test("<Header />", () => {
  render(<Header items={items} />);
  expect(screen.getByText("Website Template"));
  expect(screen.getByText("test name"));
});
