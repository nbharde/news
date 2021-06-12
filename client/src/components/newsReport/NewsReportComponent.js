import React from "react";

const NewsReportComponent = ({article}) => {
    return(
        <>
        <div className="article">
            <div className="image">
                <img src={article.urlToImage} alt="News" height="100" width="130"/>
            </div>
            <div className="content">
                <div className="title">{article.title}</div>
                <div className="description">{article.description}</div>
            </div>
        </div>
        </>
    );
}

export default NewsReportComponent