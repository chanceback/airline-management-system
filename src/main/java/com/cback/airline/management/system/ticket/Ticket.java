package com.cback.airline.management.system.ticket;

import com.cback.airline.management.system.flight.Flight;
import com.cback.airline.management.system.itinerary.Itinerary;
import com.cback.airline.management.system.ticketClass.TicketClass;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ticketId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "itinerary_id", referencedColumnName = "itineraryId")
    private Itinerary itineraryId;

    @ManyToOne
    @JoinColumn(name = "flight_id", referencedColumnName = "flightId")
    private Flight flightId;

    @ManyToOne
    @JoinColumn(name = "ticket_class_id", referencedColumnName = "ticketClassId")
    private TicketClass ticketClassId;

    public Ticket(long ticketId, Itinerary itineraryId, Flight flightId, TicketClass ticketClassId) {
        this.ticketId = ticketId;
        this.itineraryId = itineraryId;
        this.flightId = flightId;
        this.ticketClassId = ticketClassId;
    }

    public Ticket(Itinerary itineraryId, Flight flightId, TicketClass ticketClassId) {
        this.itineraryId = itineraryId;
        this.flightId = flightId;
        this.ticketClassId = ticketClassId;
    }

    protected Ticket() {}

    public long getTicketId() {
        return ticketId;
    }

    public void setTicketId(long ticketId) {
        this.ticketId = ticketId;
    }

    public Itinerary getItineraryId() {
        return itineraryId;
    }

    public void setItineraryId(Itinerary itineraryId) {
        this.itineraryId = itineraryId;
    }

    public Flight getFlightId() {
        return flightId;
    }

    public void setFlightId(Flight flightId) {
        this.flightId = flightId;
    }

    public TicketClass getTicketClassId() {
        return ticketClassId;
    }

    public void setTicketClassId(TicketClass ticketClassId) {
        this.ticketClassId = ticketClassId;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "ticketId=" + ticketId +
                ", itineraryId=" + itineraryId +
                ", flightId=" + flightId +
                ", ticketClassId=" + ticketClassId +
                '}';
    }
}
