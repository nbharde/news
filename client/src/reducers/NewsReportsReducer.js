const NewsReportsReducer = (newsReports = [], action) => {
    switch (action.type) {
        case 'LIST':
            return action.payload;

        case 'SEARCH':
            return action.payload;
    
        default:
            return newsReports;
    }
}

export default NewsReportsReducer;