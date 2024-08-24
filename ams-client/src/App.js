// Import dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "./App.css";

// Import Pages

import HomePage from "./pages/HomePage";
import PassengersPage from "./pages/PassengersPage";
import AirportsPage from "./pages/AirportsPage";
import FlightsPage from "./pages/FlightsPage";
import ItinerariesPage from "./pages/ItinerariesPage";
import BookingPage from "./pages/BookingPage";
import TicketsPage from "./pages/TicketsPage";
import TicketClassesPage from "./pages/TicketClassesPage";

import CreatePassengerPage from "./pages/CreatePassengerPage";
import UpdatePassengerPage from "./pages/UpdatePassengerPage";

import CreateAirportsPage from "./pages/CreateAirportsPage";
import UpdateAirportsPage from "./pages/UpdateAirportsPage";

import CreateFlightsPage from "./pages/CreateFlightsPage";
import UpdateFlightsPage from "./pages/UpdateFlightsPage";

import CreateTicketClassesPage from "./pages/CreateTicketClassesPage";
import UpdateTicketClassesPage from "./pages/UpdateTicketClassesPage";

import ViewItineraryPage from "./pages/ViewItineraryPage";

import BookingPassengersPage from "./pages/BookingPassengersPage";
import CreateBookingPage from "./pages/CreateBookingsPage";

function App() {
  const [passengerToUpdate, setPassengerToUpdate] = useState([]);
  const [airportToUpdate, setAirportToUpdate] = useState([]);
  const [flightToUpdate, setFlightToUpdate] = useState([]);
  const [ticketClassToUpdate, setTicketClassToUpdate] = useState([]);
  const [itineraryToView, setItineraryToView] = useState([]);
  const [passengerResults, setPassengerResults] = useState([]);
  const [bookingPassenger, setBookingPassenger] = useState([]);

  return (
    <Router>
      <header>
        <h1>Airline Travel Management System</h1>
        <p>Normandy Airlines</p>
      </header>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="airports"
            element={<AirportsPage setAirportToUpdate={setAirportToUpdate} />}
          />
          <Route path="airports-add" element={<CreateAirportsPage />} />
          <Route
            path="airports-edit"
            element={<UpdateAirportsPage airport={airportToUpdate} />}
          />

          <Route
            path="passengers"
            element={
              <PassengersPage setPassengerToUpdate={setPassengerToUpdate} />
            }
          />
          <Route path="passengers-add" element={<CreatePassengerPage />} />
          <Route
            path="passengers-edit"
            element={<UpdatePassengerPage passenger={passengerToUpdate} />}
          />

          <Route
            path="flights"
            element={<FlightsPage setFlightToUpdate={setFlightToUpdate} />}
          />
          <Route path="flights-add" element={<CreateFlightsPage />} />
          <Route
            path="flights-edit"
            element={<UpdateFlightsPage flight={flightToUpdate} />}
          />

          <Route
            path="itineraries"
            element={
              <ItinerariesPage setItineraryToView={setItineraryToView} />
            }
          />
          <Route
            path="itineraries-view"
            element={<ViewItineraryPage itinerary={itineraryToView} />}
          />

          <Route
            path="booking"
            element={<BookingPage setPassengerResults={setPassengerResults} />}
          />
          <Route
            path="booking-search"
            element={
              <BookingPassengersPage
                passengers={passengerResults}
                setBookingPassenger={setBookingPassenger}
              />
            }
          />
          <Route
            path="booking-add"
            element={<CreateBookingPage passenger={bookingPassenger} />}
          />

          <Route path="tickets" element={<TicketsPage />} />

          <Route
            path="ticket-classes"
            element={
              <TicketClassesPage
                setTicketClassToUpdate={setTicketClassToUpdate}
              />
            }
          />
          <Route
            path="ticket-classes-add"
            element={<CreateTicketClassesPage />}
          />
          <Route
            path="ticket-classes-edit"
            element={
              <UpdateTicketClassesPage ticketClass={ticketClassToUpdate} />
            }
          />
        </Routes>
      </main>

      <footer>
        <p>&copy; Chance Back</p>
      </footer>
    </Router>
  );
}

export default App;
