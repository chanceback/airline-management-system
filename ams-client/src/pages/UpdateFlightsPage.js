import { React, useState, useEffect } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function UpdateFlightsPage({ flight }) {
  const [departureAirportId, setDepartureAirportId] = useState();
  const [arrivalAirportId, setArrivalAirportId] = useState();
  const [departureTime, setDepartureTime] = useState(flight.departureTime);
  const [arrivalTime, setArrivalTime] = useState(flight.arrivalTime);
  const [airfare, setAirfare] = useState(flight.airFare);
  const [capacity, setCapacity] = useState(flight.capacity);

  const navigate = useNavigate();

  const editFlight = async () => {
    const response = await fetch(`${API_URL}/flights/${flight.flightId}`, {
      method: "PUT",
      body: JSON.stringify({
        departureAirportId: departureAirportId,
        arrivalAirportId: arrivalAirportId,
        departureTime: departureTime,
        arrivalTime: arrivalTime,
        airFare: airfare,
        capacity: capacity,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Successfully edited the flight!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update flight. Status ${response.status}. ${errMessage.Error}`
      );
    }
    navigate("../flights");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editFlight();
  };

  // Use state to bring in the data
  const [airports, setAirports] = useState([]);

  // RETRIEVE the list of airports
  const loadAirports = async () => {
    const response = await fetch(`${API_URL}/airports`);
    const airports = await response.json();
    setAirports(airports);

    for (const airport of airports) {
      if (flight.departureAirport === airport.airportName) {
        setDepartureAirportId(airport.airportId);
      }

      if (flight.arrivalAirport === airport.airportName) {
        setArrivalAirportId(airport.airportId);
      }
    }
  };

  // LOAD Airports
  useEffect(() => {
    loadAirports();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Edit a Flights Information</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <legend>
          <strong>Edit Flight: {flight.flightId}</strong>
        </legend>
        <fieldset class="fields">
          <label>Departure Airport</label>
          <select
            value={departureAirportId}
            onChange={(e) => setDepartureAirportId(e.target.value)}
          >
            {airports.map((airport, i) => (
              <option value={airport.airportId} key={i}>
                {airport.airportName}
              </option>
            ))}
          </select>

          <label>Arrival Airport</label>
          <select
            value={arrivalAirportId}
            onChange={(e) => setArrivalAirportId(e.target.value)}
          >
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
            type="number"
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
              Save
            </button>
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default UpdateFlightsPage;
