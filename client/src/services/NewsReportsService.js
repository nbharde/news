import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1/news";

export const getNewsReportsService = () => {
    return axios.get(API_BASE_URL);
}

export const getSearchedNewsService = (searchKeyword) => {
    return axios.post(API_BASE_URL + '/search', searchKeyword);
}
