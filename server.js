const express = require('express');
const path = require('path');

const app = express();

const publicDirectory = path.join(__dirname, './assets');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.listen(5000, () => {
    console.log('server on 5k');
});
