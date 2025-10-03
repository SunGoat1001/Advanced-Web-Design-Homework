const Square = require('../models/square');

exports.showForm = (req, res) => {
    res.render('index', { perimeter: null, area: null, sideLength: "" });
};

exports.calculateSquare = (req, res) => {
    const { sideLength } = req.body;

    const square = new Square(Number(sideLength));
    const perimeter = square.getPerimeter();
    const area = square.getArea();

    res.render('index', { perimeter, area, sideLength });
};  				
