const Router = require('express')
const router = new Router()

router.post('/add-game')
router.post('/enroll-game')
router.get('/games')
router.post('/end-game')

module.exports = router