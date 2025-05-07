const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { bookActivity, getMyBookings } = require("../controllers/bookingController");

router.post("/", auth, bookActivity);
router.get("/me", auth, getMyBookings);

module.exports = router;
