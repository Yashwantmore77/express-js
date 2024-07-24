const express = require("express");
const router = express.Router();
router.use(logger);

const users = [{ name: "John" }, { name: "Jane" }];

router.param("id", (req, res, next, id) => {
  req.userData = users[id];
  next();
});

router.get("/", (req, res) => {
  res.send("users");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.userData);
    res.send(`user with ID : ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`user with ID : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`user with ID : ${req.params.id}`);
  });

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
