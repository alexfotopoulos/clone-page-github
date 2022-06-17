const express = require("express")
const path = require("path")
const ejsMate = require("ejs-mate")
const app = express();

app.use(express.static("public"))

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})