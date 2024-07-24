const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.render("index", { test: "test" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);
app.listen(3000, ()=>console.log('Application Tsarted'));
