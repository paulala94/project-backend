const router = require("express").Router()
const axios = require("axios")

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmE0OTYyZDhhMGQwZTM5NzI0NzViNzNkMGRkOTMwYyIsInN1YiI6IjY0NjBmMWY5ZTNmYTJmMDEwM2ExMzhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSw_-y69moAP6jKmJZNllQ10KA-AL_WSRvswkuW2Q-w'
    }
};

router.get("/peliculas-new", (req, res, next) => {
    axios.request(options)
        .then(response => {
            res.render("api/new-movie", { movie: response.data });
            console.log(response.data);
        })
        .catch(err => {
            next(err)
        });
});

module.exports = router;


