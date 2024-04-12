import { render, screen } from "@testing-library/react";
import Home from "./page";

it("App Router: Works with Server Components", () => {
	render(<Home />);
	expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});
