require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const path = require('path');
const sequelize = require('./configs/databse');

const app = express();

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', routes)

sequelize.sync().then(() => {
    console.log('Database conntected');
    app.listen(process.env.PORT || 3000, () => console.log('Server is listenning on http://localhost:3000'));
}).catch(err => console.log('ERROR:', err));