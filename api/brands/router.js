const app = require('express')
const router = app.Router()
const { getAllBrands } = require ('./controller')


router.get ('/get-all-brands', getAllBrands )
router.get ('/get-brand-by-id', getAllBrands )
router.get ('/get-brand-by-name', getAllBrands )
router.post ('/create-brand', getAllBrands )
router.put ('/update-brand', getAllBrands )
router.delete ('/delete-brand', getAllBrands )

module.exports = router