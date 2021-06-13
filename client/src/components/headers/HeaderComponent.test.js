import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import HeaderComponent from "./HeaderComponent";

describe("Testing HeaderComponent", () => {
    it("renders a component", () => {
        const { queryByTestId } = render(<HeaderComponent />);
        expect(queryByTestId("heading_testId")).not.toBeNull();
    });

    it("matches snapshot", () => {
         const { container } = render(<HeaderComponent />);
        expect(container).toMatchSnapshot();
    });
});
