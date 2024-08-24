import React from "react";

// Needs to receive a JSON from a fetch in classes page
function TicketsTable({ tickets }) {
  return (
    <table id="tickets">
      <thead>
        <tr>
          <th>Ticket ID</th>
          <th>Itinerary ID</th>
          <th>Flight ID</th>
          <th>Ticket Class ID</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((tickets, i) => (
          <tr>
            <td>{tickets.ticketId}</td>
            <td>{tickets.itineraryId}</td>
            <td>{tickets.flightId}</td>
            <td>{tickets.ticketClassId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TicketsTable;
