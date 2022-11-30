const express = require('express');
const app = express();

app.use(express.json())

function generateNumber(max) {
    return Math.floor(Math.random() * max) + 1
}

function roller(dieList) {
    for (const die of dieList) {
        const dieType = die.dieType
        const rollCount = die.rollCount

        for (let count = 0; count < rollCount; count++) {
            console.log(generateNumber(dieType))
        }
    }
}

app.post('/roll', function (req, res) {

    if (req.body.dies) {
        const dieList = req.body.dies;
        roller(dieList)
        res.status(200).end()
    }
    else {
        console.log('Dies key not found')
        res.status(400).send("Required structure is:\n" +
            "{\n" +
            "\t\"dies\":\n" +
            "\t[{\n" +
            "\t    \"dieType\": int representing the number of sides,\n" +
            "\t    \"rollCount\": int representing the number of rolls\n" +
            "\t},{...}]" +
            "\n}")
    }
})

const server = app.listen(8081, function () {
    console.log("Server running")
});