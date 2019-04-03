const express = require('express')
const router = express.Router()
const controllerBook = require('../controller/controllerBook')

router.get('/books', controllerBook.read)
router.post('/books', controllerBook.create)
router.put('/books/update', controllerBook.update)
router.delet('/books/remove', controllerBook.remove)
module.exports = router