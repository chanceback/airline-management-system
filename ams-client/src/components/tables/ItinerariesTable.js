import React from "react";
import { MdVisibility, MdDeleteForever } from "react-icons/md";

// Needs to receive a JSON from a fetch in airports page
function ItinerariesTable({ itineraries, onView, onDelete }) {
  return (
    <table id="itineraries">
      <thead>
        <tr>
          <th>Itinerary ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Passport</th>
          <th>Trip Name</th>
          <th>View</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {itineraries.map((itinerary, i) => (
          <tr>
            <td>{itinerary.itineraryId}</td>
            <td>{itinerary.firstName}</td>
            <td>{itinerary.lastName}</td>
            <td>{itinerary.passport}</td>
            <td>{itinerary.tripName}</td>
            <td>
              <MdVisibility onClick={() => onView(itinerary)} />
            </td>
            <td>
              <MdDeleteForever
                onClick={() => onDelete(itinerary.itineraryId)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItinerariesTable;
