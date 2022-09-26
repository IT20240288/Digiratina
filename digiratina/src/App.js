import React from "react";
import AddReservation from "./pages/Reservation/AddReservation";
import ViewReservation from "./pages/Reservation/ViewReservation";
import Availability from "./pages/Reservation/Availability";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/AddReservation" element={<AddReservation />} />
        <Route path="/ViewReservation" element={<ViewReservation />} />
        <Route path="/Availability" element={<Availability />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
