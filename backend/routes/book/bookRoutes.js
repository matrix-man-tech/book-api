const express = require('express')
const { createBookCtrl, updateBookCtrl, fetchBooksCtrl } = require('../../controllers/books/bookControllers')
const authMiddleware = require('../../middleware/authMiddleware')

bookRoutes = express.Router()

bookRoutes.post('/',authMiddleware,createBookCtrl)
bookRoutes.put('/:id',authMiddleware,updateBookCtrl)
bookRoutes.get('/listallbooks',authMiddleware,fetchBooksCtrl)


module.exports = bookRoutes