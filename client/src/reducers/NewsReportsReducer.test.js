import React from "react";
import NewsReportsReducer from "./NewsReportsReducer";

describe("Testing NewsReportsReducer", () => {
    
    it("should return default state", () => {
        const newState = NewsReportsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it("should return new state if receiving type: LIST", () => {
        const newsReports = [{title: 'Test1'}, {title: 'Test2'}, {title: 'Test3'}];
        const newState = NewsReportsReducer(undefined, {
            type: 'LIST',
            payload: newsReports
        });
        expect(newState).toEqual(newsReports);
    });

    it("should return new state if receiving type: SEARCH", () => {
        const newsReports = [{title: 'Test1'}, {title: 'Test2'}];
        const newState = NewsReportsReducer(undefined, {
            type: 'SEARCH',
            payload: newsReports
        });
        expect(newState).toEqual(newsReports);
    });
});