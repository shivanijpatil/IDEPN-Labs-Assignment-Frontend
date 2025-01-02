// import React, { useState } from "react";
// import "./UserForm.css";
// export const UserForm = ({ setUserId }) => {
//   const [name, setName] = useState("");
//   const handleSubmit = () => {
//     if (!name.trim()) {
//       alert("please enter a name");
//     }
//     setUserId(name.trim());
//   };
//   return (
//     <div className="userform-container">
//       <h2 className="userform-title">Enter Your Name</h2>
//       <input
//         type="text"
//         className="userform-input"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button
//         className={`userform-button ${!name.trim() ? "disabled" : ""}`}
//         onClick={handleSubmit}
//         disabled={!name.trim()}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

import React, { useState } from "react";
import "./UserForm.css";

export const UserForm = ({ setUserId }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Please fill out all fields.");
      return;
    }
    setUserId(name.trim());
  };

  return (
    <div className="userform-container">
      <h2 className="userform-title">Enter Your Details</h2>
      <input
        type="text"
        className="userform-input"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        className="userform-input"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        className={`userform-button ${!name.trim() || !phone.trim() ? "disabled" : ""}`}
        onClick={handleSubmit}
        disabled={!name.trim() || !phone.trim()}
      >
        Next
      </button>
    </div>
  );
};
