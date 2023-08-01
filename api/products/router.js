const app = require('express')
const router = app.Router()
const { getAllProducts } = require ('./controller')


router.get ('/get-all-products', getAllProducts )
router.get ('/get-product-by-id', getAllProducts )
router.get ('/get-product-by-name', getAllProducts )
router.post ('/create-product', getAllProducts )
router.put ('/update-product', getAllProducts )
router.delete ('/delete-product', getAllProducts )

module.exports = router