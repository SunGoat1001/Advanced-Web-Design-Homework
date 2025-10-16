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

router.get('/', productController.getAll)
router.post('/add', upload.single('image'), productController.create)
router.get('/edit/:id', productController.editForm)
router.post('/edit/:id', upload.single('iamge'), productController.update)
router.get('/delete/:id', productController.delete)

module.exports = router