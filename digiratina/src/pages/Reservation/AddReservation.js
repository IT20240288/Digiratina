import React, { useState } from "react";
import "./reservation.css";
import reserveImage from "../../images/reserve.jpg";
import axios from "axios";
import { useNavigate } from "react-router";

export default function AddReservation() {
  const [reservation, setReservation] = useState({
    roomType: "",
    checkIn: "",
    checkOut: "",
    noOfRooms: 0,
    noOfKids: 0,
    noOfAdults: 0
  });
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/reservation/add",
        reservation
      );
      if (res.status === 201) {
        setReservation(undefined);
        alert("Reservation Successfull");
        navigate("/ViewReservation");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="reservation-container">
      <img src={reserveImage} className="reserveimg" />
      <div className="container-sm">
        <center>
          <h3>Add Reservation</h3>
          <br />
          <label className="lable">Room Type</label>
          <select
            class="form-control"
            id="roomType"
            name="roomType"
            placeholder="Select Room Type"
            onChange={e =>
              setReservation({ ...reservation, roomType: e.target.value })
            }
          >
            <option value="Deluxe King Room">Deluxe King Room</option>
            <option value="Deluxe Twin Room">Deluxe Twin Room</option>
            <option value="Premier King Room">Premier King Room</option>
            <option value="Premier Twin Room">Premier Twin Room</option>
            <option value="Signature King Room">Signature King Room</option>
          </select>
          <br />

          <center>
            <label className="lable">CheckIn Date</label>
            <input
              type="date"
              class="form-control"
              id="checkIn"
              name="checkIn"
              onChange={e =>
                setReservation({ ...reservation, checkIn: e.target.value })
              }
            />

            <br />
          </center>
          <center>
            <label className="lable">CheckOut Date </label>
            <input
              type="date"
              class="form-control"
              id="checkOut"
              name="checkOut"
              onChange={e =>
                setReservation({ ...reservation, checkOut: e.target.value })
              }
            />
            <br />
          </center>
          <center>
            <label className="lable">Number Of Rooms </label>
            <input
              type="number"
              class="form-control"
              id="noOfRooms"
              name="noOfRooms"
              onChange={e =>
                setReservation({ ...reservation, noOfRooms: e.target.value })
              }
            />
            <br />
          </center>
          <center>
            <label className="lable">Number Of Kids </label>
            <input
              type="number"
              class="form-control"
              id="noOfKids"
              name="noOfKids"
              onChange={e =>
                setReservation({ ...reservation, noOfKids: e.target.value })
              }
            />
            <br />
          </center>
          <center>
            <label className="lable">Number Of Adults</label>
            <input
              type="number"
              class="form-control"
              id="noOfAdults"
              name="noOfAdults"
              onChange={e =>
                setReservation({ ...reservation, noOfAdults: e.target.value })
              }
            />
            <br />
          </center>
          <button onClick={onSubmit} class="btn btn-primary">
            Submit
          </button>
        </center>
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
