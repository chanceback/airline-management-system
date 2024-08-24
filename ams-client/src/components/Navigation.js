import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="passengers">Passengers</Link>
      <Link to="airports">Airports</Link>
      <Link to="flights">Flights</Link>
      <Link to="itineraries">Itineraries</Link>
      <Link to="booking">Book Trip</Link>
      <Link to="ticket-classes">Ticket Classes</Link>
      <Link to="tickets">Tickets</Link>
    </nav>
  );
}

export default Navigation;
