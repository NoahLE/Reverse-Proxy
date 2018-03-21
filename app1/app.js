const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world. I am an app 1."))

app.listen(3000, () => console.log("Example app listing on port 3k"))
