import React from "react";
import "./reservation.css";
import reserveImage from "../../images/reserve.jpg";

export default function AddReservation() {
  return (
    <div className="reservation-container">
      <img src={reserveImage} className="reserveimg" />
      <div className="container-sm">
        <form>
          <center>
            <h3>Add Reservation</h3>
            <br />
            <label>Room Type</label>

            <select class="form-control" id="roomType" name="roomType">
              <option selected>Select Room Type</option>
              <option value="Deluxe King Room">Deluxe King Room</option>
              <option value="Deluxe Twin Room">Deluxe Twin Room</option>
              <option value="Premier King Room">Premier King Room</option>
              <option value="Premier Twin Room">Premier Twin Room</option>
              <option value="Signature King Room">Signature King Room</option>
            </select>

            <br />

            <label>CheckIn Date</label>
            <input
              type="date"
              class="form-control"
              id="checkIn"
              name="checkIn"
            />
            <br />
            <label>CheckOut Date</label>
            <input
              type="date"
              class="form-control"
              id="checkOut"
              name="checkOut"
            />
            <br />

            <label>Number Of Rooms</label>
            <input
              type="number"
              class="form-control"
              id="noOfRooms"
              name="noOfRooms"
            />
            <br />

            <label>Number Of Kids</label>
            <input
              type="number"
              class="form-control"
              id="noOfKids"
              name="noOfKids"
            />
            <br />

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </center>
        </form>
      </div>
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
    </div>
  );
}
