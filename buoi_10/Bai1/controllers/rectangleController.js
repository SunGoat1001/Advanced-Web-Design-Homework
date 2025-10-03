const Rectangle = require('../models/rectangle');

exports.caculatePerimeter = (req, res) => {
    const { width, height } = req.body;

    const rectangle = new Rectangle(Number(width), Number(height));
    const perimeter = rectangle.getPerimeter();

    console.log(rectangle);

    res.render('index', { rectangle, perimeter });
}