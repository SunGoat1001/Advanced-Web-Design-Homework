require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')
const sequelize = require('./configs/database')
const Product = require('./models/productModel')
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
// app.use(bodyParser.urlencoded())
app.set('view engine', 'ejs');

app.use('/', routes);

(async () => {
    await sequelize.sync();
    const count = await Product.count();
    if (count === 0) {
        const demoData = [];
        for (let i = 1; i <= 100; i++) {
            demoData.push({
                name: `Sản phẩm ${i}`,
                price: Math.floor(Math.random() * 1000),
                image: 'default.jpg',
                description: `Mô tả sản phẩm ${i}`
            });
        }
        await Product.bulkCreate(demoData);
        console.log('✅ Đã seed 100 sản phẩm!');
    }
})();


app.listen(port, () => console.log('Server is listenning on http://localhost:' + port));
