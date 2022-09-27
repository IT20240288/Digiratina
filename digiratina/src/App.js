import React from "react";
import AddReservation from "./pages/Reservation/AddReservation";
import ViewReservation from "./pages/Reservation/ViewReservation";
import Availability from "./pages/Reservation/Availability";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UpdateReservation from "./pages/Reservation/UpdateReservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/AddReservation" element={<AddReservation />} />
        <Route path="/ViewReservation" element={<ViewReservation />} />
        <Route path="/Availability" element={<Availability />} />
        <Route path="/UpdateReservation" element={<UpdateReservation />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
