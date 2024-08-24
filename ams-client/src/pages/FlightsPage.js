import React from "react";
import FlightsTable from "../components/tables/FlightsTable";
import { useState, useEffect } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function FlightsPage({ setFlightToUpdate }) {
  // Use navigate for updating
  const navigate = useNavigate();

  // Use state to bring in the data
  const [flights, setFlights] = useState([]);

  // RETRIEVE the list of airports
  const loadFlights = async () => {
    const response = await fetch(`${API_URL}/flights`);
    const flights = await response.json();
    setFlights(flights);
  };

  // UPDATE Airport
  // will probably need to get flight entity and then setFlightToUpdate
  const onEditFlight = async (flight) => {
    setFlightToUpdate(flight);
    navigate("../flights-edit");
  };

  // CREATE Airport
  const navigateToCreate = () => {
    navigate("../flights-add");
  };

  // DELETE Airport
  const onDeleteFlight = async (id) => {
    const response = await fetch(`${API_URL}/flights/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const getResponse = await fetch(`${API_URL}/flights`);
      const flights = await getResponse.json();
      setFlights(flights);
    } else {
      console.error(
        `Failed to delete flight with id = ${id}, status code = ${response.status}`
      );
      alert(
        "Flight could not be deleted. This is likely due to an active itinerary."
      );
    }
  };

  // LOAD Airports
  useEffect(() => {
    loadFlights();
  }, []);

  return (
    <>
      <h1>Flights</h1>
      <FlightsTable
        flights={flights}
        onEdit={onEditFlight}
        onDelete={onDeleteFlight}
      />
      <button onClick={navigateToCreate}>Create New Flight</button>
    </>
  );
}

export default FlightsPage;
