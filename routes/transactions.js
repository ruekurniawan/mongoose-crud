const express = require('express')
const router = express.Router()
const controllerBook = require('../controller/controllerBook')

router.get('/transactions', controllerBook.read)
router.post('/transactions', controllerBook.create)
router.put('/transactions/update', controllerBook.update)
router.delet('/transactions/remove', controllerBook.remove)
module.exports = router