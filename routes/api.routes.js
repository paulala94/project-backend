const router = require("express").Router()
const axios = require("axios")

const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/search/pro',
    params: {
        country: 'us',
        services: 'netflix,prime.buy,hulu.addon.hbo,peacock.free',
        output_language: 'en',
        show_type: 'movie',
        genres: '18,80',
        genres_relation: 'or',
        // keyword: 'zombie',
        show_original_language: 'en',
        year_min: '2000',
        year_max: '2025',
        order_by: 'year',
        desc: 'true'
    },
    headers: {
        'X-RapidAPI-Key': '008a72a717msh3f3f676623b2669p142376jsnb704aca49cf5',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
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


