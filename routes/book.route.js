const { fetchBook, addBook } = require('../controllers/book.controller')
const router = require('express').Router()



router.route("/books").get(fetchBook).post(addBook)


module.exports = router