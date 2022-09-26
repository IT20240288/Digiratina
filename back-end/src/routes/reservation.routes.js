const router = require("express").Router();
const {
  addReservation,
  getAllReservation
} = require("../controller/reservation.controller");

router.post("/add", addReservation);
router.get("/", getAllReservation);

module.exports = router;
