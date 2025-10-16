require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')
const port = process.env.PORT || 3000

app.use(express.urlencoded())
// app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.use('/', (req, res) => res.send('Welcome to My World!'))
app.use('/admin', routes)

app.listen(port, () => console.log('Server is listenning on http://localhost:' + port));
