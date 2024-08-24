import React from "react";
import ItinerariesTable from "../components/tables/ItinerariesTable";
import { useState, useEffect } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function ItinerariesPage({ setItineraryToView }) {
  // Use navigate for updating
  const navigate = useNavigate();

  // Use state to store Itineraries data from servers
  const [itineraries, setItineraries] = useState([]);

  // RETRIEVE list of flights
  const loadItineraries = async () => {
    const response = await fetch(`${API_URL}/itineraries/table`);
    const itineraries = await response.json();
    setItineraries(itineraries);
  };

  // VIEW Itinerary
  const onViewItinerary = async (itinerary) => {
    setItineraryToView(itinerary);
    navigate("../itineraries-view");
  };

  // DELETE Itinerary
  const onDeleteItinerary = async (id) => {
    const response = await fetch(`${API_URL}/itineraries/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const getResponse = await fetch(`${API_URL}/itineraries/table`);
      const itineraries = await getResponse.json();
      setItineraries(itineraries);
    } else {
      console.error(
        `Failed to delete itinerary with id = ${id}, status code = ${response.status}`
      );
    }
  };

  // LOAD Airports
  useEffect(() => {
    loadItineraries();
  }, []);

  return (
    <>
      <h1>Itineraries</h1>
      <ItinerariesTable
        itineraries={itineraries}
        onView={onViewItinerary}
        onDelete={onDeleteItinerary}
      />
    </>
  );
}

export default ItinerariesPage;
