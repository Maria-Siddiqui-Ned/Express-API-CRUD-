const app = require('express')
const router = app.Router()
const { getAllCategories } = require ('./controller')


router.get ('/get-all-categories', getAllCategories )
router.get ('/get-category-by-id', getAllCategories )
router.get ('/get-category-by-name', getAllCategories )
router.post ('/create-category', getAllCategories )
router.put ('/update-category', getAllCategories )
router.delete ('/delete-category', getAllCategories )

module.exports = router