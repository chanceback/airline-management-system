import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../API";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";

function CreateBookingPage({ passenger }) {
  const navigate = useNavigate();

  const passengerId = passenger.passengerId;
  const [ticketClassId, setTicketClassId] = useState("");
  const [tripName, setTripName] = useState("");
  const [flightChoices, setFlightChoice] = useState([""]);

  const handleAddFlight = () => {
    if (flightChoices.length < 5) {
      setFlightChoice([...flightChoices, ""]);
    }
  };
  const handleRemoveFlight = () => {
    if (flightChoices.length > 1) {
      const data = [...flightChoices];
      data.pop();
      setFlightChoice(data);
    }
  };

  const handleFlightChange = (index, event) => {
    const data = [...flightChoices];
    data[index] = event.target.value;
    setFlightChoice(data);
  };

  const createBooking = async () => {
    const newBooking = {
      passengerId,
      tripName,
      ticketClassId,
      flightIds: flightChoices,
    };
    const response = await fetch(`${API_URL}/bookings/add`, {
      method: "post",
      body: JSON.stringify(newBooking),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully created the Booking!");
    } else {
      alert(`Failed to create booking, status code = ${response.status}`);
    }
    navigate("../booking");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createBooking();
  };

  // Retrieve ALL Drop Menu Data
  const [flights, setFlights] = useState([]);
  const [classes, setClasses] = useState([]);

  // RETRIEVE the list of flights
  const loadFlights = async () => {
    const response = await fetch(`${API_URL}/flights`);
    const flights = await response.json();
    setFlights(flights);
  };

  // RETRIEVE the list of ticket classes
  const loadClasses = async () => {
    const response = await fetch(`${API_URL}/ticketClasses`);
    const classes = await response.json();
    setClasses(classes);
  };

  // LOAD Flights and Ticket Classes
  useEffect(() => {
    loadFlights();
    loadClasses();
  }, []);

  return (
    <>
      <h1>Book Trip</h1>
      <p>
        Fill out the following form and the appropriate Itinerary/Tickets will
        be generated for the given Passenger.
      </p>
      <p>
        The submission of this form acts as the INSERT for Tickets &
        Itineraries.
      </p>
      <p>Between 1-5 Flights can be selected for a Flight Path.</p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset class="fields">
          <p>
            {`Name: ${passenger.firstName} ${passenger.lastName}`} |{" "}
            {`Passport: ${passenger.passport}`}{" "}
          </p>
          <label>Trip Name</label>
          <input
            type="text"
            placeholder="Enter name for trip..."
            required
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />
          <label>Flight Class</label>
          <select
            value={ticketClassId}
            onChange={(e) => setTicketClassId(e.target.value)}
          >
            <option value="null">Select...</option>
            {classes.map((ticketClass, i) => (
              <option value={ticketClass.ticketClassId} key={i}>
                {ticketClass.className}
              </option>
            ))}
          </select>

          {flightChoices.map((flightChoice, i) => {
            return (
              <>
                <label>Flight {i + 1}</label>
                <select
                  value={flightChoices[i]}
                  required
                  onChange={(e) => handleFlightChange(i, e)}
                >
                  <option value="">Select...</option>
                  {flights.map((flight, i) => (
                    <option value={flight.flightId} key={i}>
                      {`${flight.departureAirport} -> ${flight.arrivalAirport} |
                                ${flight.departureTime} -> ${flight.arrivalTime}`}
                    </option>
                  ))}
                </select>
              </>
            );
          })}

          <MdRemoveCircleOutline onClick={handleRemoveFlight} />
          <MdAddCircleOutline onClick={handleAddFlight} />

          <label for="submit">
            <button type="submit" id="submit">
              Book
            </button>
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default CreateBookingPage;
