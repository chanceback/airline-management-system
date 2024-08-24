import React, { useState } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function CreatePassengerPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const addPassenger = async () => {
    const newPassenger = { firstName, lastName, passport, email, phoneNumber };
    const response = await fetch(`${API_URL}/passengers`, {
      method: "post",
      body: JSON.stringify(newPassenger),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the passenger!");
    } else {
      alert(`Failed to add passenger, status code = ${response.status}`);
    }
    navigate("../passengers");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addPassenger();
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <legend>
          <strong>Add New Passenger to Table</strong>
        </legend>
        <fieldset class="fields">
          <label for="firstName"> First Name </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name:"
            pattern="^[a-zA-Z \s]+$"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
          />

          <label> Last Name </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name:"
            pattern="[a-zA-Z]+"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
          />

          <label> Passport # </label>
          <input
            type="passport"
            name="passport"
            placeholder="Enter 9 digit passport #:"
            required
            minlength="9"
            maxlength="9"
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
            id="passport"
          />
          <label for="email"> E-mail </label>
          <input
            type="email"
            name="email"
            placeholder="Enter @hello.com e-mail address:"
            pattern=".+@hello\.com"
            size="30"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          <label for="phone"> Telephone Number </label>
          <input
            type="phone"
            name="phone"
            placeholder="Enter phone number (###-###-####):"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phone"
          />
          <label for="submit">
            <button type="submit" id="submit">
              Add
            </button>
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default CreatePassengerPage;
