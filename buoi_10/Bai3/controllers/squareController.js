const Square = require('../models/square');

exports.showForm = (req, res) => {
    res.render('index', { sideLength: "", perimeter: null, area: null });
};

exports.calculateSquare = async (req, res) => {
    const { sideLength } = req.body;

    const perimeter = 4 * sideLength;
    const area = sideLength * sideLength;

    const square = new Square({ sideLength, perimeter, area });
    await square.save();

    res.render('index', { sideLength, perimeter, area });
};  
