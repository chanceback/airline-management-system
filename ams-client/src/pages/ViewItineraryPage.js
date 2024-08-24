import React, { useState, useEffect } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";
import ItineraryViewTable from "../components/tables/ItineraryViewTable";

function ViewItineraryPage({ itinerary }) {
  // Use navigate for updating
  const navigate = useNavigate();

  // Use state to bring in the data
  const [flightPath, setFlightPath] = useState([]);

  // RETRIEVE the flight path
  const loadItinerary = async () => {
    const response = await fetch(
      `${API_URL}/itineraries/${itinerary.itineraryId}`
    );
    const flightPath = await response.json();
    setFlightPath(flightPath);
  };

  // LOAD Airports
  useEffect(() => {
    loadItinerary();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Flight Path Information</h1>
      <p>{`Trip Name: ${itinerary.tripName}`}</p>
      <ItineraryViewTable itinerary={flightPath} />
      <button onClick={() => navigate("../itineraries")}>Back</button>
    </>
  );
}

export default ViewItineraryPage;
