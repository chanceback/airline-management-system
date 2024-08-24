import React from "react";

// Needs to receive a JSON from a fetch in airports page
function ItineraryViewTable({ itinerary }) {
  return (
    <table id="itinerary-view">
      <thead>
        <tr>
          <th>Flight ID</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Airfare</th>
          <th>Capacity</th>
        </tr>
      </thead>
      <tbody>
        {itinerary.map((flight, i) => (
          <tr>
            <td>{flight.flightId}</td>
            <td>{flight.departureAirport}</td>
            <td>{flight.arrivalAirport}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.arrivalTime}</td>
            <td>{flight.airFare}</td>
            <td>{flight.capacity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItineraryViewTable;
