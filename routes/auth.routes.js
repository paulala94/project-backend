const router = require("express").Router()
const User = require("../models/User.model")

// Signup
router.get('/registro', (req, res, next) => res.render('auth/signup'))
router.post('/registro', (req, res, next) => {

})

// Login
router.get('/iniciar-sesion', (req, res, next) => res.render('auth/login'))
router.post('/iniciar-sesion', (req, res, next) => {

})

//Logout
router.get('/desconectar', (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
})

module.exports = router;