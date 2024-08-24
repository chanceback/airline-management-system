import { React, useState } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function UpdatePassengerPage({ passenger }) {
  const [firstName, setFirstName] = useState(passenger.firstName);
  const [lastName, setLastName] = useState(passenger.lastName);
  const [passport, setPassport] = useState(passenger.passport);
  const [email, setEmail] = useState(passenger.email);
  const [phoneNumber, setPhoneNumber] = useState(passenger.phoneNumber);

  const navigate = useNavigate();

  const editPassenger = async () => {
    const response = await fetch(
      `${API_URL}/passengers/${passenger.passengerId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          passport: passport,
          email: email,
          phoneNumber: phoneNumber,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      alert("Successfully edited passenger!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update passenger. Status ${response.status}. ${errMessage.Error}`
      );
    }
    navigate("../passengers");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editPassenger();
  };

  return (
    <>
      <h1>Edit a Passenger's Information</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Passenger ID: {passenger.passengerId}</legend>
          <label for="firstName">First Name</label>
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

          <label for="lastName">Last Name</label>
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

          <label for="passport">Passport</label>
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

          <label for="email">Email</label>
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
          ></input>

          <label for="phoneNumber">Phone Number</label>
          <input
            name="phone"
            placeholder="Enter phone number (###-###-####):"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phoneNumber"
          />

          <label for="submit">
            <button id="submit">Save</button>
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default UpdatePassengerPage;
