const Booking = require("../models/Booking");

exports.bookActivity = async (req, res) => {
  try {
    const booking = await Booking.create({
      userId: req.user,
      activityId: req.body.activityId,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user }).populate("activityId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
