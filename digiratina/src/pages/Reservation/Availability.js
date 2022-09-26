import React, { useState, useEffect } from "react";
import "./reservation.css";

export default function Availability() {
  const [reservation, setReservation] = useState([]);
  return (
    <div className="reservation-container">
      <center>
        <h3 className="heading">Availability</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Room Type</th>
              <th scope="col">Total Number of Rooms</th>
              <th scope="col">CheckIn</th>
              <th scope="col">CheckOut</th>
              <th scope="col">Booked</th>
            </tr>
          </thead>
          <tbody>
            {reservation.map(reserve => (
              <tr key={reserve._id}>
                <td>{reserve.roomType}</td>
                <td>5</td>
                <td>{reserve.checkIn}</td>
                <td>{reserve.checkOut}</td>
                <td>{reserve.noOfRooms}</td>
              </tr>
            ))}
            <tr>
              <td>Test</td>
              <td>5</td>
              <td>22/07/18</td>
              <td>22/07/18</td>
              <td>test</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success">
          <a
            href="/AddReservation"
            style={{ textDecoration: "none", color: "white" }}
          >
            Proceed To Reservation
          </a>
          &nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 20"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </button>
      </center>
    </div>
  );
}
