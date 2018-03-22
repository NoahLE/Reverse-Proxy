const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world. I am an app 2."))

app.listen(3000, () => console.log("App 2 listening on port 3000"))
