const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello and Welcome to my first Docker project!");
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});