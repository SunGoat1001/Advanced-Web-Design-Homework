const Rectangle = require('../models/rectangleModel');

exports.getHomepage = (req, res) => {
    res.render('index');
}

exports.createData = async (req, res) => {
    let { length, width } = req.body;

    // length = parseFloat(length);
    // width = parseFloat(width);

    const perimeter = (parseFloat(length) + parseFloat(width)) * 2;
    const area = parseFloat(length) * parseFloat(width);
    console.log(length, width, perimeter, area);
    await Rectangle.create({ length, width, perimeter, area });
    res.redirect('/list');
}

exports.getList = async (req, res) => {
    const data = await Rectangle.findAll({ order: [['id', 'desc']] });

    res.render('list', { data });
}