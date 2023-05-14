const router = require("express").Router()
const axios = require("axios")

let url = 'https://api.watchmode.com/v1/sources/?apiKey=Q4LKmOUsrfIXDtxvYpU5OKRjwjyeibHPGuFaFHlh ';

router.get("/peliculas-new", (req, res, next) => {
    axios.get(url)
        .then(response => {
            res.render("api/new-movie", { movie: response.data });
            console.log(response.data);
        })
        .catch(err => {
            next(err)
        });
});



module.exports = router;


