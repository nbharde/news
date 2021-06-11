const axios = require('axios');

const getNews = async (req, res) => {
    try {
        const newsList = await axios({
            method: "GET",
            url: "https://newsapi.org/v2/everything",
            headers: {

            },
            params: {
                q: 'tesla',
                from: '2021-05-11',
                sortBy: 'publishedAt',
                apiKey: process.env.NEWS_API_KEY
            }
        });
        res.status(200).json(newsList.data)

    } catch (error) {
        res.status(200).json(error)
    }

}

module.exports = {
    getNews
}