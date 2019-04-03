const express = require('express')
const router = express.Router()
const controllerMember = require('../controller/controllerMember')

router.get('/members', controllerMember.read)
router.post('/members', controllerMember.create)
router.put('/members/update', controllerMember.update)
router.delet('/members/remove', controllerMember.remove)
module.exports = router