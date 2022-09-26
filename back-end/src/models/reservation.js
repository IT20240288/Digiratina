const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
  roomType: {
    type: String,
    required: true
  },
  checkIn: {
    type: String,
    required: true
  },
  checkOut: {
    type: String,
    required: true
  },
  noOfRooms: {
    type: Number,
    required: true
  },
  noOfKids: {
    type: Number,
    required: true
  },
  noOfAdults: {
    type: Number,
    required: true
  }
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
