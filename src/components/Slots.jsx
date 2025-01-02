import React, { useEffect, useState } from "react";
import "./Slot.css";
export const Slots = ({ slots, userId, date, refreshSlots, setSelectedSlot }) => {
  const [bookingStatus, setBookingStatus] = useState("");
  const [futureSlots, setFutureSlots] = useState([]);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSlotBooking = async (slot) => {
    setBookingStatus("booking..");
    try {
      const response = await fetch(
        `https://idepn-labs-assignment.onrender.com/api/bookSlot`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, date, slot }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert(data.message);

        setBookingStatus("Slot booked successfully");
        refreshSlots();
      } else {
        setBookingStatus(data.message || "Failed to book slot");
      }
    } catch (error) {
      setBookingStatus("error while booking");
    } finally {
      setTimeout(() => setBookingStatus(""), 3000);
    }
  };
  const isSlotAvailable = (slot) => {
    const currentTime = new Date();
    const [start, end] = slot.split("-");
    const [startHour, startMinute] = start.split(":").map(Number);
    const slotDate = new Date(date);
    slotDate.setHours(startHour, startMinute, 0, 0);

    return slotDate > currentTime;
  };

  if (!slots.length) {
    return <p className="no-slots">No Slots available for the selected Date</p>;
  }
  return (
    <div>
      <h3>Select a Time Slot</h3>
      <div className="slots-grid">
        {slots.map((item, index) => {
          const isAvailable = isSlotAvailable(item);
          return (
            <button
              style={{
                padding: "10px",
                backgroundColor: isAvailable ? "#85d0df" : "#ccc",
                cursor: isAvailable ? "pointer" : "not-allowed",
              }}
              key={index}
              className="slot-button"
              onClick={() => isAvailable && handleSlotBooking(item)}
              disabled={!isAvailable}
            >
              {item}
            </button>
          );
        })}
      </div>
      {bookingStatus && <p className="booking-status">{bookingStatus}</p>}
    </div>
  );
};
