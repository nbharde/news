import React from "react";
import { useSelector } from "react-redux";

import NewsReportComponent from "../newsReport/NewsReportComponent";
import SearchComponent from "../search/SearchComponent";

const NewsReportsComponent = (props) => {
    const { articles } = useSelector(state => state.newsReportsReducer);

    return(
        <div className="container">
            <SearchComponent />

            { articles && articles.length > 0 ? (
                <div className="content-container" data-testid="articles_testId">
                    {articles.map(article => (
                        <NewsReportComponent article={article} key={article.title}/>
                    ))}
                </div>
            ) : 
            <div data-testid="no_article_testId">No article found</div>
            }
        </div>
    );
}

export default NewsReportsComponent