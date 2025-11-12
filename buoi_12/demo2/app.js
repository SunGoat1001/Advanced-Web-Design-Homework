const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const Product = require('./models/Product');
const adminRoutes = require('./routes/adminRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/admin', adminRoutes);

app.get('/', (req, res) => res.redirect('/admin'));

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

app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'));
