const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const routes = require('./routes');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.set('views', __dirname + '/views');

app.use(expressLayouts);
app.set('layout', 'layout/default');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.locals.title = "Barker's Alley";
    next();
});

app.use('/', routes);

app.listen(port, () => {
    console.log('Server is listenning on http://localhost:' + port);
});