import React, { useState, useEffect } from "react";
import "./reservation.css";
import reserveImage from "../../images/reserve.jpg";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

export default function UpdateReservation() {
  const [reservation, setReservation] = useState({
    roomType: "",
    checkIn: "",
    checkOut: "",
    noOfRooms: 0,
    noOfKids: 0,
    noOfAdults: 0
  });

  const { state } = useLocation();
  const navigate = useNavigate();

  const { id } = state;

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/reservation/${id}`
      );
      if (res.status === 200) {
        console.log("xx", res.data);
        setReservation({
          roomType: res.data.roomType,
          checkIn: res.data.checkIn,
          checkOut: res.data.checkOut,
          noOfRooms: res.data.noOfRooms,
          noOfKids: res.data.noOfKids,
          noOfAdults: res.data.noOfAdults
        });
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/reservation/${id}`,
        reservation
      );
      if (res.status === 200) {
        setReservation(undefined);
        alert("Update Successfull");
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
          <h3>Update Reservation</h3>
          <br />
          <label className="lable">Room Type</label>

          <select
            class="form-control"
            id="roomType"
            name="roomType"
            placeholder="Select Room Type"
            value={reservation.roomType}
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

          <label className="lable">CheckIn Date</label>
          <input
            value={reservation.checkIn}
            type="date"
            class="form-control"
            id="checkIn"
            name="checkIn"
            onChange={e =>
              setReservation({ ...reservation, checkIn: e.target.value })
            }
          />
          <br />
          <label className="lable">CheckOut Date</label>
          <input
            type="date"
            value={reservation.checkOut}
            class="form-control"
            id="checkOut"
            name="checkOut"
            onChange={e =>
              setReservation({ ...reservation, checkOut: e.target.value })
            }
          />
          <br />

          <label className="lable">Number Of Rooms</label>
          <input
            value={reservation.noOfRooms}
            type="number"
            class="form-control"
            id="noOfRooms"
            name="noOfRooms"
            onChange={e =>
              setReservation({ ...reservation, noOfRooms: e.target.value })
            }
          />
          <br />

          <label className="lable">Number Of Kids</label>
          <input
            type="number"
            class="form-control"
            id="noOfKids"
            name="noOfKids"
            value={reservation.noOfKids}
            onChange={e =>
              setReservation({ ...reservation, noOfKids: e.target.value })
            }
          />
          <br />
          <label className="lable">Number Of Adults </label>
          <input
            value={reservation.noOfAdults}
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
            Update
          </button>
        </center>
      </div>
    </div>
  );
}
