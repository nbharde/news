import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import NewsReportsComponent from "./components/newsReports/NewsReportsComponent";
import HeaderComponent from "./components/headers/HeaderComponent";
import { getNewsReports } from "./actions/NewsReportsAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getNewsReports());
    }, [dispatch])

    return (
        <>
            <HeaderComponent/>
            <NewsReportsComponent/>
        </>
    )
}

export default App;