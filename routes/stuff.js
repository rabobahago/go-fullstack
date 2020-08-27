const express = require('express')
const router = express.Router()
const stuffCtrl = require('../controllers/stuff')

router.get('/', stuffCtrl.getAllThings)
router.post('/', stuffCtrl.createThings)
router.get('/:id', stuffCtrl.getOneThing)
router.put('/:id', stuffCtrl.updateOneThing)
router.delete('/:id', stuffCtrl.deleteThing)

module.exports = router
