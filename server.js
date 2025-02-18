const express = require('express');
const app = express();
const path = require('path');

// Set EJS sebagai templating engine
app.set('view engine', 'ejs');

// Middleware untuk mengakses file statis di folder public
app.use(express.static(path.join(__dirname, 'public')));

// Route utama untuk halaman utama
app.get('/', (req, res) => {
    res.render('index', { title: "Scholar Home" });
});

app.get('/order', (req, res) => {
    res.render('order', { title: "Scholar Home" });
});

app.get('/detailproduct', (req, res) => {
    res.render('detailproduct', { title: "Scholar Home" });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
