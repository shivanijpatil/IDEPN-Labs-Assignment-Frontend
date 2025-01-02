# Appointment App

This is a web application that allows users to book appointments for available slots. The application is built using React for the frontend and Node.js with Express and MongoDB for the backend. The frontend and backend are deployed separately, and the system follows a simple booking logic where users can select a time slot and book it.

## Features

- **User Registration:** Users can enter their unique ID to begin booking appointments.
- **Available Slots:** Displays available time slots for the selected date.
- **Slot Booking:** Allows users to book slots. Past slots are disabled, and only available future slots can be selected.
- **CORS Support:** The backend API has CORS enabled to allow communication between the frontend and backend.

## Tech Stack

- **Frontend:**
  - React
  - Vite (for faster development and bundling)

  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - CORS (for cross-origin requests)

## Routes Used
### Backend (Node.js + Firebase Cloud Functions)
GET /api/slots?date=YYYY-MM-DD
Purpose: Fetch available 30-minute slots for the given date.

Input: Date in YYYY-MM-DD format.
Output: List of available slots for the selected date.
POST /api/bookSlot
Purpose: Book a slot for a user.

Input: Date, Slot, and User ID.
Output: Success or failure message.

- **Deployment:**
  - **Frontend:** Deployed on [Vercel](booking-app-assignment.vercel.app)
  - **Backend:** Deployed on [Render](https://idepn-labs-assignment.onrender.com)

## SCREENSHOT
![image](https://github.com/user-attachments/assets/16c638a4-aa3c-4888-a439-2f4065e6de66)  <br> <br>
![image](https://github.com/user-attachments/assets/41de16bb-ac3f-4fb2-b2b1-af81221f9d65)

