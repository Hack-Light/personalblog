if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const methodOverride = require("method-override");
const flash = require("express-flash");

const app = express();

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
};

mongoose.connect(process.env.DATABASE_URL, options).catch(err => {
  console.log(err);
});

app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
// require("./config/passport.config")(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
app.use(flash());

const indexRouter = require("./routes/indexRoute");
const singlePostRouter = require("./routes/singlePostRoute");
// const adminRouter = require("./routes/adminRoute");
// const { authRouter } = require("./routes/authRoute");
const contactRouter = require("./routes/contact");
const aboutRouter = require("./routes/about");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "/public/stylesheets")));
app.use("/js", express.static(path.join(__dirname, "/public/javascripts")));
app.use("/img", express.static(path.join(__dirname, "/public/images")));

app.use("/", indexRouter);
app.use("/posts", singlePostRouter);
// app.use("/admin", adminRouter);
// app.use("/auth", authRouter);
app.use("/signup", contactRouter);
app.use("/about", aboutRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});

module.exports = app;
