const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

const server = app.listen(8081, function () {
    console.log("Server running")
});