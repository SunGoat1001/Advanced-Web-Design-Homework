const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const productController = require('./controllers/productController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/uploads'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})

const upload = multer({ storage })

router.get('/admin/', productController.getAll)
router.post('/admin/add', upload.single('image'), productController.create)
router.get('/admin/edit/:id', productController.editForm)
router.post('/admin/edit/:id', upload.single('iamge'), productController.update)
router.get('/admin/delete/:id', productController.delete)

module.exports = router