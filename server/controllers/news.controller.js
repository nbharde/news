const axios = require('axios');

const BASE_URL = "https://newsapi.org/v2/top-headlines";

const getNews = async (req, res) => {
    try {
        const newsList = await axios({
            method: "GET",
            url: BASE_URL,
            headers: {},
            params: {
                country: process.env.COUNTRY,
                apiKey: process.env.NEWS_API_KEY
            }
        });
        res.status(200).json(newsList.data)

    } catch (error) {
        res.status(404).json(error)
    }
}

const getSearchedNews = async (req, res) => {
    const { keyword } = req.body
    
    try {
        const searchedNews = await axios({
            method: "GET",
            url: BASE_URL,
            headers: {},
            params: {
                country: process.env.COUNTRY,
                apiKey: process.env.NEWS_API_KEY,
                q: keyword
            }
        });
        res.status(200).json(searchedNews.data)

    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {
    getNews,
    getSearchedNews
}