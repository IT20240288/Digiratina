const Reservation = require("../models/reservation");

exports.createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    const savedReservation = await reservation.save();
    if (savedReservation) {
      res.status(201).send({ message: "success!", data: savedReservation });
    } else {
      res.status(400).send({ message: "failed!", data: savedReservation });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.json(reservation);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.getAllReservation = async (req, res) => {
  try {
    const reservation = await Reservation.find({});
    res.json(reservation);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const deleteReservation = await Reservation.deleteOne(req.params);
    res.json(deleteReservation);
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const updateReservation = await Reservation.updateOne(
        { _id: req.params.id },
        { ...data }
      );
      console.log("updated ", updateReservation);
      res.status(200).send({ message: "success", data: updateReservation });
    } else {
      res.status(204).send({ message: "update data can not be empty!" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).send({ message: "error", data: e });
  }
};
