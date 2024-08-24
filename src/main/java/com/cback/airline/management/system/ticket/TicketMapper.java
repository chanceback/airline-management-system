package com.cback.airline.management.system.ticket;

import com.cback.airline.management.system.flight.Flight;
import com.cback.airline.management.system.itinerary.Itinerary;
import com.cback.airline.management.system.ticketClass.TicketClass;

public class TicketMapper {
    public static TicketDTO toDTO(Ticket ticket) {
        return new TicketDTO(
                ticket.getTicketId(),
                ticket.getItineraryId().getItineraryId(),
                ticket.getFlightId().getFlightId(),
                ticket.getTicketClassId().getTicketClassId()
        );
    }

    public static Ticket toEntity(TicketDTO ticketDTO, Itinerary itinerary, Flight flight, TicketClass ticketClass) {
        return new Ticket(
                ticketDTO.getTicketId(),
                itinerary,
                flight,
                ticketClass
        );
    }
}
