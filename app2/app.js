const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world. I am an app 2."))

app.listen(4000, () => console.log("Example app listing on port 4k"))
