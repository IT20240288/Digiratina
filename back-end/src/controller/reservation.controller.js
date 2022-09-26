const Reservation = require("../models/reservation");

exports.addReservation = async ctx => {
  try {
    const data = ctx.request.body;
    const reservation = new Reservation(data);
    const temp = await reservation.save();

    if (temp) {
      return (ctx.body = { temp });
    } else {
      console.log("Student add failed!");
    }
  } catch (error) {
    console.log("Student adding erroe", error);
  }
};

exports.getAllReservation = async ctx => {
  try {
    const data = await Reservation.find({});
    if (data) {
      return (ctx.body = { data });
    } else {
      console.log("Student Get Failed!");
    }
  } catch (error) {
    console.log("error", error);
  }
};

exports.getReservation = async ctx => {
  try {
    const studentId = ctx.params.studentId;
    const data = await Reservation.findById(studentId);
    if (data) {
      return (ctx.body = { data });
    } else {
      console.log("Student get failed!");
    }
  } catch (error) {
    console.log("error", error);
  }
};
