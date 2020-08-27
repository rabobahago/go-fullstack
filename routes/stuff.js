const express = require('express')
const router = express.Router()
const stuffCtrl = require('../controllers/stuff')
const auth = require('../middleware/auth')

router.get('/', auth, stuffCtrl.getAllThings)
router.post('/', auth, stuffCtrl.createThings)
router.get('/:id', auth, stuffCtrl.getOneThing)
router.put('/:id', auth, stuffCtrl.updateOneThing)
router.delete('/:id', auth, stuffCtrl.deleteThing)

module.exports = router
