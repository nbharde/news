import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import NewsReportsComponent from "./NewsReportsComponent";
import { useSelector, useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

const mockAppState = { newsReportsReducer: {
    articles: [{
        title: "COVID-19: UK reports",
        description: "Description",
    }]
}}

describe("NewsReportsComponent", () => {

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
        return callback(mockAppState);
        });

        const dispatch = jest.fn();
        useDispatch.mockReturnValue(jest.fn());
    });

    afterEach(() => {
        useSelector.mockClear();
        cleanup;
    });

    it("should render a news reports", () => {
        const { queryByTestId } = render(<NewsReportsComponent />);
        expect(queryByTestId("articles_testId")).not.toBeNull();
    });

    it("should not render if articles is empty", () => {
        const localMockState = {"newsReportsReducer": {}};
        useSelector.mockImplementation(callback => {
            return callback(localMockState);
        });

        const { queryByTestId } = render(<NewsReportsComponent />);
        expect(queryByTestId("no_article_testId")).not.toBeNull();

    });

    it("matches snapshot", () => {
        const { container } = render(<NewsReportsComponent />);
        expect(container).toMatchSnapshot();
    });
});
