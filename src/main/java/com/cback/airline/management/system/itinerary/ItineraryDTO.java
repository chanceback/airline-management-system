package com.cback.airline.management.system.itinerary;

public class ItineraryDTO {
    private long itineraryId;
    private long passengerId;
    private String tripName;

    public ItineraryDTO(long itineraryId, long passengerId, String tripName) {
        this.itineraryId = itineraryId;
        this.passengerId = passengerId;
        this.tripName = tripName;
    }

    public ItineraryDTO(long passengerId, String tripName) {
        this.passengerId = passengerId;
        this.tripName = tripName;
    }

    protected ItineraryDTO() {}

    public long getItineraryId() {
        return itineraryId;
    }

    public void setItineraryId(long itineraryId) {
        this.itineraryId = itineraryId;
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

    @Override
    public String toString() {
        return "ItineraryDTO{" +
                "itineraryId=" + itineraryId +
                ", passengerId=" + passengerId +
                ", tripName='" + tripName + '\'' +
                '}';
    }
}
