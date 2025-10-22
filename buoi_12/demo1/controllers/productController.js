const Product = require('../models/productModel')

exports.getHomepage = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = 10
    const offset = (page - 1) * limit
    const sortOrder = req.query.sort === 'desc' ? 'DESC' : 'ASC'

    const { count, rows } = await Product.findAndCountAll({
        limit,
        offset,
        order: [['name', sortOrder]]
    })

    res.render('pages/homepage', {
        products: rows,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        sortOrder
    })
}

exports.getDetails = async (req, res) => {
    const product = await Product.findByPk(req.params.id)

    res.render('pages/productDetails', { product })
}

exports.getAll = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = 10
    const offset = (page - 1) * limit
    const sortOrder = req.query.sort === 'desc' ? 'DESC' : 'ASC'

    const { count, rows } = await Product.findAndCountAll({
        limit,
        offset,
        order: [['name', sortOrder]]
    })

    res.render('admin/index', {
        products: rows,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        sortOrder
    })
}

exports.create = async (req, res) => {
    const { name, price, description } = req.body

    const image = req.file ? req.file.filename : null
    await Product.create({ name, price, image, description })
    res.redirect('/admin')
}

exports.editForm = async (req, res) => {
    const product = await Product.findByPk(req.params.id)

    res.render('admin/editProduct', { product })
}

exports.update = async (req, res) => {
    const { name, price, description } = req.body
    const updatedData = { name, price, description }

    if (req.file) updatedData.image = req.file.filename

    await Product.update(updatedData, { where: { id: req.params.id } })

    res.redirect('/admin')
}

exports.delete = async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } })

    res.redirect('/admin')
}