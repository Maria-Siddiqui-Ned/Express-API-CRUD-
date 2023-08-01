const app = require('express')
const router = app.Router()

const { signup , login} = require ('./controller')


router.post('/signup', signup )
router.post('/login', login)

module.exports = router