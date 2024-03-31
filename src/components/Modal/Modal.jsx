import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Modal.css";

const Modal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim().includes("@")) {
      alert("Invalid email. Please check your email address.");
    }

    if (!/^\d{10}$/.test(phone.trim())) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }

    if (new Date(dob.trim()) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    }

    setIsSubmit(true);
    if (isSubmit) {
      setUsername("");
      setEmail("");
      setPhone("");
      setDob("");
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h2>Fill Details</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            required
            onChange={(e) => setDob(e.target.value)}
          />
          <div>
            <Button text={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
