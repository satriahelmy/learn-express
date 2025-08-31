const express = require('express');
const app = express();

app.get('/cats', (req, res) => {
    res.send('Meow');
});

app.get('/blog/:judul', (req, res) => {
    const { judul } = req.params;
    res.send(`Blog Post: ${judul}`);
});

app.get('/blog/:category/:judul', (req, res) => {
    const { category, judul } = req.params;
    res.send(`Blog Post: ${judul} in Category: ${category}`);
});

app.get('/search', (req, res) => {
    const { title } = req.query;
    if (!title) {
        return res.send('No search query provided.');
    }
    res.send(`Search Results for: ${title}`);
});

app.get('/{*any}',
    (req, res) => {
        res.send('404 Not Found');
    }
)

app.listen(
    8080,
    () => {
        console.log('Server is running on port 8080');
    }
)