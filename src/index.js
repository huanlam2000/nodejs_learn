const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Trang chủ
app.get("/", (req, res) => {
  res.render("home");
});

//Trang News
app.get("/news", (req, res) => {
  res.render("news");
});

// Server lắng nghe cổng 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
