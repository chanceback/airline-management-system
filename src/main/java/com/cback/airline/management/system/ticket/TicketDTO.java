package com.cback.airline.management.system.ticket;

public class TicketDTO {
    private long ticketId;
    private long itineraryId;
    private long flightId;
    private long ticketClassId;

    public TicketDTO(long ticketId, long itineraryId, long flightId, long ticketClassId) {
        this.ticketId = ticketId;
        this.itineraryId = itineraryId;
        this.flightId = flightId;
        this.ticketClassId = ticketClassId;
    }

    public long getTicketId() {
        return ticketId;
    }

    public void setTicketId(long ticketId) {
        this.ticketId = ticketId;
    }

    public long getItineraryId() {
        return itineraryId;
    }

    public void setItineraryId(long itineraryId) {
        this.itineraryId = itineraryId;
    }

    public long getFlightId() {
        return flightId;
    }

    public void setFlightId(long flightId) {
        this.flightId = flightId;
    }

    public long getTicketClassId() {
        return ticketClassId;
    }

    public void setTicketClassId(long ticketClassId) {
        this.ticketClassId = ticketClassId;
    }

    @Override
    public String toString() {
        return "TicketDTO{" +
                "ticketId=" + ticketId +
                ", itineraryId=" + itineraryId +
                ", flightId=" + flightId +
                ", ticketClassId=" + ticketClassId +
                '}';
    }
}
