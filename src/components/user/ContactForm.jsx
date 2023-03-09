//Node Modules
import React, { useState, useRef } from "react";
import { sendEmail } from "../../scripts/utils/getExcludedRoutes";

export default function Form() {
  const [newInfo, setNewInfo] = useState({});
  const currentDate = new Date().toISOString().split("T")[0];
  const form = useRef();

  function handleInput(e) {
    setNewInfo((newInfo) => ({
      ...newInfo,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendEmail(e);
    e.target.reset();
  }

  return (
    <form
      ref={form}
      className="contact-form flex-column-center"
      onSubmit={(e) => handleSubmit(e, form.current)}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={(e) => handleInput(e)}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={(e) => handleInput(e)}
          required
        />
      </label>
      <label>
        Date
        <input
          type="date"
          name="date"
          min={currentDate}
          required
          onChange={(e) => handleInput(e)}
        />
      </label>
      <label>
        Time
        <input
          type="time"
          name="time"
          onChange={(e) => handleInput(e)}
          required
        />
      </label>
      <input type={"submit"} />
    </form>
  );
}
