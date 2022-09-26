import React, { useState, useEffect } from "react";
import "./reservation.css";
import Swal from "sweetalert2";

export default function ViewReservation() {
  const [reservation] = useState([]);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  return (
    <div>
      <div className="view-reservation-container">
        <center>
          <h1>Reservations</h1>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Room Type</th>
                <th scope="col">CheckIn</th>
                <th scope="col">CheckOut</th>
                <th scope="col">Number Of Rooms</th>
                <th scope="col">Number Of Kids</th>
                <th scope="col">Number Of Adults</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {reservation.map(reserve => (
                <tr key={reserve._id}>
                  <td>{reserve.roomType}</td>
                  <td>{reserve.checkIn}</td>
                  <td>{reserve.checkIn}</td>
                  <td>{reserve.noOfRooms}</td>
                  <td>{reserve.noOfKids}</td>
                  <td>{reserve.noOfAdults}</td>

                  <td>
                    <a
                      className="btn btn-warning"
                      href={`UpdateReservation/${reserve._id}`}
                    >
                      <i class="material-icons">edit</i>
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#">
                      <i className="material-icons">delete_forever</i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success">
            {" "}
            <a
              href="/AddReservation"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add New Reservation
            </a>
          </button>
        </center>
      </div>
    </div>
  );
}
