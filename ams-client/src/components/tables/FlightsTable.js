import React from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";

// Needs to receive a JSON from a fetch in airports page
function FlightsTable({ flights, onEdit, onDelete }) {
  return (
    <table id="flights">
      <thead>
        <tr>
          <th>Flight ID</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Airfare</th>
          <th>Capacity</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight, i) => (
          <tr>
            <td>{flight.flightId}</td>
            <td>{flight.departureAirport}</td>
            <td>{flight.arrivalAirport}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.arrivalTime}</td>
            <td>{flight.airFare}</td>
            <td>{flight.capacity}</td>
            <td>
              <MdEdit onClick={() => onEdit(flight)} />
            </td>
            <td>
              <MdDeleteForever onClick={() => onDelete(flight.flightId)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlightsTable;
