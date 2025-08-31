const express = require('express');
const app = express();

app.use(
    () => {
        console.log('We got request');
    }
);

app.listen(
    8080,
    () => {
        console.log('Server is running on port 8080');
    }
)