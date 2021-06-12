import React from "react";
import { useSelector } from "react-redux";

import NewsReportComponent from "../newsReport/NewsReportComponent";
import SearchComponent from "../search/SearchComponent";

const NewsReportsComponent = (props) => {
    const newsReports = useSelector(state => state.newsReportsReducer);
    
    return(
        <div className="container">
            {/* <div className="searchbox-container">
                <form>
                    <input type="text" className="search-box"/>
                    <input type="submit" className="submit-btn" />
                </form>
            </div> */}
            
            <SearchComponent />

            { newsReports.articles && newsReports.articles.length > 0 ? (
                <div className="content-container">
                    {newsReports.articles.map(article => (
                        <NewsReportComponent article={article} key={article.title}/>
                    ))}
                </div>
            ) : 
            <div />
            }
        </div>
    );
}

export default NewsReportsComponent