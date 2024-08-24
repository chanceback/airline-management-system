import React, { useState, useEffect } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function CreateFlightsPage() {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [airfare, setAirfare] = useState("");
  const [capacity, setCapacity] = useState("");

  const navigate = useNavigate();

  const addFlight = async () => {
    const response = await fetch(`${API_URL}/flights`, {
      method: "post",
      body: JSON.stringify({
        departureAirportId: departureAirport,
        arrivalAirportId: arrivalAirport,
        departureTime: departureTime,
        arrivalTime: arrivalTime,
        airFare: airfare,
        capacity: capacity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the Flight!");
    } else {
      alert(`Failed to add flight, status code = ${response.status}`);
    }
    navigate("../flights");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addFlight();
  };

  // Use state to bring in the data
  const [airports, setAirports] = useState([]);

  // RETRIEVE the list of airports
  const loadAirports = async () => {
    const response = await fetch(`${API_URL}/airports`);
    const airports = await response.json();
    setAirports(airports);
  };

  // LOAD Airports
  useEffect(() => {
    loadAirports();
  }, []);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <legend>
          <strong>Add New Flight to Table</strong>
        </legend>
        <fieldset class="fields">
          <label>Departure Airport</label>
          <select
            value={departureAirport}
            required
            onChange={(e) => setDepartureAirport(e.target.value)}
          >
            <option value="">Select...</option>
            {airports.map((airport, i) => (
              <option value={airport.airportId} key={i}>
                {airport.airportName}
              </option>
            ))}
          </select>

          <label>Arrival Airport</label>
          <select
            value={arrivalAirport}
            required
            onChange={(e) => setArrivalAirport(e.target.value)}
          >
            <option value="">Select...</option>
            {airports.map((airport, i) => (
              <option value={airport.airportId} key={i}>
                {airport.airportName}
              </option>
            ))}
          </select>

          <label>Departure Time</label>
          <input
            type="datetime-local"
            name="departure-time"
            pattern="datetime-local"
            required
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            id="departure-time"
          />
          <label>Arrival Time</label>
          <input
            type="datetime-local"
            name="arrival-time"
            pattern="datetime-local"
            required
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            id="arrival-time"
          />
          <label>Airfare</label>
          <input
            type="text"
            name="airfare"
            pattern="[0-9]+"
            placeholder="Enter Airfare:"
            required
            value={airfare}
            onChange={(e) => setAirfare(e.target.value)}
            id="phoneNumber"
          />
          <label>Capacity</label>
          <input
            type="number"
            name="capacity"
            pattern="[0-9]+"
            placeholder="Enter Capacity:"
            required
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            id="capacity"
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

export default CreateFlightsPage;
