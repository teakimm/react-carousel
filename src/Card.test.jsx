import { it, expect } from "vitest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.jsx";

it("renders without crashing", function () {
    render(<Card caption="Test" scr="any src" currNum={1} totalNum={3} />);
});

it("matches snapshot", function () {
    const { container } = render(
        <Card
            caption="Test"
            scr="any src"
            currNum={1}
            totalNum={3}
        />
    );
    expect(container).toMatchSnapshot();
});