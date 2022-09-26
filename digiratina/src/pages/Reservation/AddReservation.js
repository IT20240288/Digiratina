import React, { useState } from "react";
import "./reservation.css";
import reserveImage from "../../images/reserve.jpg";
import axios from "axios";
export default function AddReservation() {
  const [reservation, setReservation] = useState({
    roomType: "",
    checkIn: "",
    checkOut: "",
    noOfRooms: 0,
    noOfKids: 0,
    noOfAdults: 0
  });

  const onSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/reservation/add",
        reservation
      );
      if (res.status === 201) {
        setReservation(undefined);
        alert("Reservation Successfull");
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
          <label>Room Type</label>

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

          <label>CheckIn Date</label>
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
          <label>CheckOut Date</label>
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

          <label>Number Of Rooms</label>
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

          <label>Number Of Kids</label>
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

          <button onClick={onSubmit} class="btn btn-primary">
            Submit
          </button>
        </center>
      </div>
    </div>
  );
}
