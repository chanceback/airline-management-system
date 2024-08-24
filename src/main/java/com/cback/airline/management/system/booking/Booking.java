package com.cback.airline.management.system.booking;

import java.util.List;

public class Booking {
    private long passengerId;
    private String tripName;
    private long ticketClassId;
    private List<Long> flightIds;

    public Booking(long passengerId, String tripName, long ticketClassId, List<Long> flightIds) {
        this.passengerId = passengerId;
        this.tripName = tripName;
        this.ticketClassId = ticketClassId;
        this.flightIds = flightIds;
    }

    public long getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(long passengerId) {
        this.passengerId = passengerId;
    }

    public String getTripName() {
        return tripName;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    public long getTicketClassId() {
        return ticketClassId;
    }

    public void setTicketClassId(long ticketClassId) {
        this.ticketClassId = ticketClassId;
    }

    public List<Long> getFlightIds() {
        return flightIds;
    }

    public void setFlightIds(List<Long> flightIds) {
        this.flightIds = flightIds;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "passengerId=" + passengerId +
                ", tripName='" + tripName + '\'' +
                ", ticketClassId=" + ticketClassId +
                ", flightIds=" + flightIds +
                '}';
    }
}
