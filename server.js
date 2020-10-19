const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const getApi = require("./routes/api");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express(path.join(__dirname, "client/build")));

app.use("/api/data", getApi);

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/public/index.html"));
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
