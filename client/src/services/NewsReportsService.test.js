import React from "react";
import { getNewsReportsService, getSearchedNewsService } from "./NewsReportsService";
import axios from 'axios';

jest.mock('axios');

const API_BASE_URL = "http://localhost:3000/api/v1/news";

describe('NewsReportsService Apis', () => {
    describe('getNewsReportsService', () => {
        describe('with success', () => {
            const data = {};

            beforeEach(() => {
                axios.get.mockResolvedValue(data);
            });

            it('should call axios get with /news', async () => {
                await getNewsReportsService();
                expect(axios.get).toBeCalledWith(API_BASE_URL);
            });
        });
    });

    describe('getSearchedNewsService', () => {
        describe('with success', () => {
            const data = {};

            beforeEach(() => {
                axios.post.mockResolvedValue(data);
            });

            it('should call axios get with /search', async () => {
                let searchKeyword = {
                    keyword: ''
                }
                await getSearchedNewsService(searchKeyword);
                expect(axios.post).toBeCalledWith(API_BASE_URL + '/search', searchKeyword);
            });
        });
    });
});