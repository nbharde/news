import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import NewsReportComponent from "./NewsReportComponent";

const article = {
    title: "COVID-19: UK reports",
    description: "Description",
    urlToImage: ""
}

describe("Testing NewsReportComponent", () => {
    it("renders a component", () => {
        const { queryByTestId } = render(<NewsReportComponent article={article}/>);
        expect(queryByTestId("headline_testId")).not.toBeNull();
    });

    it("matches snapshot", () => {
        const { container } = render(<NewsReportComponent article={article}/>);
        expect(container).toMatchSnapshot();
    });
});


