import { getNewsReportsService, getSearchedNewsService } from "../services/NewsReportsService";

export const getNewsReports = () => async (dispatch) => {
    try {
        const { data } = await getNewsReportsService();
        dispatch({type: 'LIST', payload: data});

    } catch (error) {
        console.log(error.message);
    }
}

export const getSearchedNews = (searchKeyword) => async (dispatch) => {
    try {
        const { data } = await getSearchedNewsService(searchKeyword);
        dispatch({type: 'SEARCH', payload: data});

    } catch (error) {
        console.log(error.message);
    }
}