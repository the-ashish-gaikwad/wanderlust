const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/expressError.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user.js");

router.get("/signup", (req, res) => {
  res.render("../views/users/signup.ejs");
});

router.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    await User.register(newUser, password);
    req.flash("success", "Welcome to Wanderlust!!");
    res.redirect("/listings");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});

// GET /login
router.get("/login", (req, res) => {
  res.render("../views/users/login.ejs");
});

// POST /login
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
  }),
  async (req, res) => {
    req.flash("success", "welcome back to Wanderlust");
    res.redirect("/listings")
  },
);

// GET /logout
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged Out!");
        res.redirect("/listings");
    })
})

module.exports = router;
