const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const path = require('path');


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});