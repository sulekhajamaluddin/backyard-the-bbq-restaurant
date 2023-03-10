//Node Modules
import React, { useState, useRef } from "react";
import { sendEmail } from "../../scripts/utils/sendEmail";

export default function Form() {
  const currentDate = new Date().toISOString().split("T")[0];
  const [success, setSuccess] = useState(false);
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    sendEmail(e);
    setSuccess(true);
    e.target.reset();
  }

  return (
    <form
      ref={form}
      className="contact-form flex-column-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>Name</label>
      <input type="text" name="name" required />
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Date</label>
      <input type="date" name="date" min={currentDate} required />
      <label>Time</label>
      <input type="time" name="time" required />
      {success && (
        <span>We have recieved the booking. Please check your email.</span>
      )}
      <input type="submit" />
    </form>
  );
}
