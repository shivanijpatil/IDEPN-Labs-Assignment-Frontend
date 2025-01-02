import React, { useState } from "react";
import { Slots } from "./Slots";
import "./Booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export const Booking = ({ userId }) => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [date, setDate] = useState(null);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    console.log("Selected Date:", format(selectedDate, "dd-MM-yyyy"));
    fetchSlots(selectedDate);
  };

  const fetchSlots = async (selectedDate) => {
    setLoading(true);
    setError("");
    const utcDate = format(selectedDate, "yyyy-MM-dd");
    try {
      const response = await fetch(
        `https://idepn-labs-assignment.onrender.com/api/slots?date=${utcDate}`
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data.availableSlots);
        setSlots(data.availableSlots);
      } else {
        setError(data.error || "Failed to fetch slots");
      }
    } catch (error) {
      setError("Failed to fetch slots");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <div className="userform-container">
        <h3>Select a Date for Your Appointment</h3>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          minDate={new Date()}
          maxDate={new Date(new Date().setDate(new Date().getDate() + 5))}
          placeholderText="dd - mm - yyyy"
          dateFormat="dd-MM-yyyy"
          className="date-picker"
        />
      </div>
      {loading && <p className="loading">Loading slots....</p>}
      {error && (
        <p className="error" style={{ color: "red" }}>
          {error}
        </p>
      )}
      {!loading && !error && date && (
        <Slots
          slots={slots}
          userId={userId}
          date={date}
          refreshSlots={() => fetchSlots(date)}
        />
      )}
    </div>
  );
};
