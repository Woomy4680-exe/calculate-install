require('dotenv').config()
const path = require('path')
const express = require('express');

const app = express()

app.listen(process.env.PORT || 3000, async () => {
    console.log(`[SERVER] Listening on port ${process.env.PORT || 3000}`)
});

app.use(express.static(__dirname + '/assets'));
