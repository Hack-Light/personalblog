if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const methodOverride = require("method-override");
const flash = require("express-flash");
const passport = require("passport");

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
require("./config/passport.config")(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
app.use(flash());

const indexRouter = require("./routes/indexRoute");
const singlePostRouter = require("./routes/singlePostRoute");
const adminRouter = require("./routes/adminRoute");
const { authRouter } = require("./routes/authRoute");
const contactRouter = require("./routes/contact")
const aboutRouter = require("./routes/about")

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "/public/stylesheets")));
app.use("/js", express.static(path.join(__dirname, "/public/javascripts")));
app.use("/img", express.static(path.join(__dirname, "/public/images")));

app.use("/", indexRouter);
app.use("/posts", singlePostRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);
app.use("/signup", contactRouter);
app.use("/about", aboutRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});

module.exports = app;
