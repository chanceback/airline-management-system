import { React, useState } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function UpdateAirportsPage({ airport }) {
  const [airport_name, setAirport_name] = useState(airport.airportName);
  const [airport_location, setAirport_location] = useState(
    airport.airportLocation
  );

  const navigate = useNavigate();

  const editAirport = async () => {
    const response = await fetch(`${API_URL}/airports/${airport.airportId}`, {
      method: "PUT",
      body: JSON.stringify({
        airportName: airport_name,
        airportLocation: airport_location,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Successfully edited the airport!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update airport. Status ${response.status}. ${errMessage.Error}`
      );
    }
    navigate("../airports");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editAirport();
  };

  return (
    <>
      <h1>Edit an Airports Information</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Airport ID: {airport.airportId}</legend>
          <label for="airport_name">Airport Name</label>
          <input
            type="airport_name"
            name="airport_name"
            placeholder="Enter Airport Name:"
            pattern="^[a-zA-Z \s]+$"
            required
            value={airport_name}
            onChange={(e) => setAirport_name(e.target.value)}
            id="airport_name"
          />

          <label for="airport_location">Location</label>
          <input
            type="airport_location"
            name="airport_location"
            placeholder="Enter Airport Location:"
            pattern="^[a-zA-Z \s]+$"
            required
            value={airport_location}
            onChange={(e) => setAirport_location(e.target.value)}
            id="airport_location"
          />

          <label for="submit">
            <button id="submit">Save</button>
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default UpdateAirportsPage;
