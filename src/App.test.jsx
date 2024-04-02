import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import App from "./App.jsx";

it("renders app without crashing", function () {
    render(<App />);
});

it("Matches snapshot", function () {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
});
