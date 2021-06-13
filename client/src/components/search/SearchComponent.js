import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getSearchedNews } from "../../actions/NewsReportsAction";

const SearchComponent = (props) => {
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
        <div className="searchbox-container" data-testid="searchbox_testId">
            <form autoComplete="off" onSubmit={handleSubmit} data-testid="form_testId">
                <input 
                    type="text" 
                    className="search-box"
                    ref={inputRef}
                    placeholder="Enter Keyword to Search"
                    data-testid="input_testId"
                />
                <button  
                    type="submit" 
                    className="submit-btn"
                    alt="Search"
                    data-testid="submit_btn_testId"
                >Submit</button>
            </form>
        </div>
    );
}

export default SearchComponent