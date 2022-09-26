const router = require("express").Router();
const {
  createReservation,
  getAllReservation,
  deleteReservation,
  updateReservation,
  getReservation
} = require("../controller/reservation.controller");

router.post("/add", createReservation);

router.get("/", getAllReservation);

router.get("/:id", getReservation);

router.delete("/:id", deleteReservation);

router.put("/:id", updateReservation);

module.exports = router;
