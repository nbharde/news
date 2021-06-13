import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import thunk from "redux-thunk";
import '@testing-library/jest-dom/extend-expect';

import SearchComponent from "./SearchComponent";
import NewsReportsReducer from "../../reducers/NewsReportsReducer";

afterEach(cleanup);

function renderWithRedux(component, {initialState, store = createStore(NewsReportsReducer, compose(applyMiddleware(thunk)))} = {}) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe("Testing SearchComponent", () => {
    it("renders the form with redux", () => {
        const { getByTestId } = renderWithRedux(<SearchComponent />);
        expect(getByTestId("searchbox_testId")).not.toBeNull();
    })

    it("Form can be submited", () => {
        const mockSubmit = jest.fn();
        const { getByTestId } = renderWithRedux(<SearchComponent />);

        fireEvent.change(getByTestId('input_testId'), { target: { value: "aaa" } });
        fireEvent.click(getByTestId('submit_btn_testId')); 

        expect(mockSubmit.mock.calls).toEqual([]); 

    });

    it("matches snapshot", () => {
        const { container } = renderWithRedux(<SearchComponent />);
        expect(container).toMatchSnapshot();
    });
});
