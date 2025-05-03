const express = require("express");
const { loginAdmin, getAdminProfile } = require("../controllers/adminController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/profile", protect, getAdminProfile);

module.exports = router;
// This code sets up the routes for admin login and profile retrieval.
// It uses Express.js to define the routes and middleware for authentication.
// The `loginAdmin` function handles the login process, while the `getAdminProfile` function retrieves the admin's profile information.
// The `protect` middleware ensures that the profile route is protected and requires authentication.