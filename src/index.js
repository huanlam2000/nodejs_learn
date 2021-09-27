const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const SortMiddleware = require('./app/middlewares/SortMiddleware');




const route = require("./routes");
const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// middleware
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());


// Custom Middleware
app.use(SortMiddleware);

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
	"hbs",
	handlebars({
		extname: ".hbs",
		helpers: {
			sum: (a, b) => a + b,
			sortable: (field, sort) => {

				const sortType = field === sort.column ? sort.type : 'default';


				const icons = {
					default: "fas fa-sort",
					asc: "fas fa-sort-amount-down-alt",
					desc: 'fas fa-sort-amount-down',
				};

				const types = {
					default: 'desc',
					asc: 'desc',
					desc: 'asc'
				}

				const icon = icons[sortType];
				const type = types[sortType];

				return `<a href="?_sort&column=${field}&type=${type}">
							<i class="${icon}"></i>
						</a>`;

			}
		},
	})
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

// Server lắng nghe cổng 3000
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
