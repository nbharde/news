import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getSearchedNews } from "../../actions/NewsReportsAction";

const SearchComponent = ({article}) => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { value } = inputRef.current;
        const request = {
            keyword: value
        }
        
        dispatch(getSearchedNews(request));
    }

    return(
        <div className="searchbox-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="search-box"
                    ref={inputRef}
                    placeholder="Enter Keyword to Search"
                />
                <input 
                    type="submit" 
                    className="submit-btn"
                    alt="Search"
                />
            </form>
        </div>
    );
}

export default SearchComponent