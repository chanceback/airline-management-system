import React from "react";
import PassengersTable from "../components/tables/PassengersTable";
import { useState, useEffect } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function PassengersPage({ setPassengerToUpdate }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Use navigate for updating and creating
  const navigate = useNavigate();

  // Use state to load data into table
  const [passengers, setPassengers] = useState([]);

  // RETRIEVE the list of passengers
  const loadPassengers = async () => {
    const response = await fetch(`${API_URL}/passengers`);
    const passengers = await response.json();
    setPassengers(passengers);
  };

  // UPDATE a Passenger
  const onEditPassenger = async (passenger) => {
    setPassengerToUpdate(passenger);
    navigate("../passengers-edit");
  };

  // CREATE a Passenger
  const navigateToCreate = () => {
    navigate("../passengers-add");
  };

  // DELETE a Passenger
  const onDeletePassenger = async (id) => {
    const response = await fetch(`${API_URL}/passengers/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const getResponse = await fetch(`${API_URL}/passengers`);
      const passengers = await getResponse.json();
      setPassengers(passengers);
    } else {
      console.error(
        `Failed to delete passenger with id = ${id}, status code = ${response.status}`
      );
      alert(
        "Passenger could not be deleted. This is likely due to an active itinerary."
      );
    }
  };

  // Search a Passenger
  const lookupPassenger = async () => {
    const response = await fetch(
      `${API_URL}/passengers/${firstName}/${lastName}`
    );
    if (response.status === 200) {
      const passenger = await response.json();
      setPassengers([passenger]);
    } else {
      alert("Passenger not found!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    lookupPassenger();
  };

  // LOAD the Passengers
  useEffect(() => {
    loadPassengers();
  }, []);

  return (
    <>
      <h1>Passengers</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <caption>Search Passenger</caption>
          <label>First Name</label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter first name:"
            pattern="^[a-zA-Z \s]+$"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            id="last_name"
            placeholder="Enter last name:"
            pattern="[a-zA-Z]+"
            required
            onChange={(e) => setLastName(e.target.value)}
          />

          <label for="submit">
            <button type="submit" id="submit">
              Search
            </button>
          </label>
        </fieldset>
      </form>

      <PassengersTable
        passengers={passengers}
        onEdit={onEditPassenger}
        onDelete={onDeletePassenger}
      />

      <button onClick={navigateToCreate}>Create New Passenger</button>
    </>
  );
}

export default PassengersPage;
