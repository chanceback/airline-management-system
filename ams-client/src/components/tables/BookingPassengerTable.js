import React from "react";
import { MdAirplaneTicket } from "react-icons/md";
// Needs to receive a JSON from a fetch in Passengers page
function BookingPassengersTable({ passengers, onBook }) {
  return (
    <table id="passengers">
      <caption>Matching Passengers</caption>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Passport</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Book Trip</th>
        </tr>
      </thead>
      <tbody>
        {passengers.map((passenger, i) => (
          <tr>
            <td>{passenger.firstName}</td>
            <td>{passenger.lastName}</td>
            <td>{passenger.passport}</td>
            <td>{passenger.email}</td>
            <td>{passenger.phoneNumber}</td>
            <td>
              <MdAirplaneTicket onClick={() => onBook(passenger)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingPassengersTable;
