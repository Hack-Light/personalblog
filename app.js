const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const indexRouter = require("./routes/indexRoute");
const singlePostRouter = require("./routes/singlePostRoute");
const adminRouter = require("./routes/adminRoute");

mongoose.connect("mongodb://localhost:27017/portfolio", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "/public/stylesheets")));
app.use("/js", express.static(path.join(__dirname, "/public/javascripts")));
app.use("/img", express.static(path.join(__dirname, "/public/images")));

app.use("/", indexRouter);
app.use("/posts", singlePostRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

module.exports = app;
