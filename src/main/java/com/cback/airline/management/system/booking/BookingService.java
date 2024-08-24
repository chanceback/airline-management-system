package com.cback.airline.management.system.booking;

import com.cback.airline.management.system.flight.Flight;
import com.cback.airline.management.system.flight.FlightService;
import com.cback.airline.management.system.itinerary.Itinerary;
import com.cback.airline.management.system.itinerary.ItineraryDTO;
import com.cback.airline.management.system.itinerary.ItineraryService;
import com.cback.airline.management.system.ticket.Ticket;
import com.cback.airline.management.system.ticket.TicketService;
import com.cback.airline.management.system.ticketClass.TicketClass;
import com.cback.airline.management.system.ticketClass.TicketClassService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    private final ItineraryService itineraryService;
    private final TicketService ticketService;
    private final FlightService flightService;
    private final TicketClassService ticketClassService;

    public BookingService(ItineraryService itineraryService, TicketService ticketService, FlightService flightService, TicketClassService ticketClassService) {
        this.itineraryService = itineraryService;
        this.ticketService = ticketService;
        this.flightService = flightService;
        this.ticketClassService = ticketClassService;
    }

    public long createBooking(Booking booking) {
        // create a new Itinerary
        ItineraryDTO itineraryDTO = new ItineraryDTO(booking.getPassengerId(), booking.getTripName());
        Itinerary itinerary = itineraryService.createItinerary(itineraryDTO);

        Optional<TicketClass> ticketClassOpt = ticketClassService.getTicketClass(booking.getTicketClassId());

        if (ticketClassOpt.isEmpty()) {
            throw new RuntimeException("Ticket Class was not found");
        }

        TicketClass ticketClass = ticketClassOpt.get();

        // create a new ticket for each flight
        List<Flight> flightsList = flightService.getFlightsByIds(booking.getFlightIds());

        if (flightsList.size() != booking.getFlightIds().size()) {
            throw new RuntimeException("One or more flights was not found");
        }

        flightsList.forEach(flight -> ticketService.createTicket(
                new Ticket(itinerary, flight, ticketClass)
        ));

        // return itinerary id to the front end
        return itinerary.getItineraryId();
    }
}
