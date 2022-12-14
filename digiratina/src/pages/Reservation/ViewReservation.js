import React, { useState, useEffect } from "react";
import "./reservation.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function ViewReservation() {
  const [reservation, setReservation] = useState([]);
  const navigate = useNavigate();

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/reservation/");
      if (res.status === 200) {
        setReservation(res.data);
        console.log("data", res.data);
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  const ondelete = async id => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/reservation/${id}`
      );
      if (res.status === 200) {
        alert("Delete Sucessfull!");
        getData();
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="view-reservation-container">
        <center>
          <h1>Reservations</h1>
          <table id="customers">
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
                  <td>{reserve.checkOut}</td>
                  <td>{reserve.noOfRooms}</td>
                  <td>{reserve.noOfKids}</td>
                  <td>{reserve.noOfAdults}</td>

                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        navigate("/UpdateReservation", {
                          state: { id: reserve._id }
                        });
                      }}
                    >
                      <i class="icons">edit</i>
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-warning"
                      onClick={() => ondelete(reserve._id)}
                    >
                      <i className="icons">delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link to={"/AddReservation"}>
            <button className="AddBtn">Add New Reservation</button>
          </Link>
        </center>
      </div>
    </div>
  );
}
