const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizedRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

router.get("/admin", verifyToken, authorizedRoles("admin"), (req, res) => {
  res.json({ message: "welcome admin" });
});


//BOTH ADMIN AND MANAGER
router.get(
  "/manager",
  verifyToken,
  authorizedRoles("admin","manager"),
  (req, res) => {
    res.json({ message: "welcome manager" });
  }
);

//ADMIN MANAGER AND USER
router.get(
  "/user",
  verifyToken,
  authorizedRoles("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "welcome user" });
  }
);

module.exports = router;
