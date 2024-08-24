package com.cback.airline.management.system.itinerary;

public class ItineraryDetailsDTO {
    private long itineraryId;
    private String firstName;
    private String lastName;
    private String passport;
    private String tripName;

    public ItineraryDetailsDTO(long itineraryId, String firstName, String lastName, String passport, String tripName) {
        this.itineraryId = itineraryId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.passport = passport;
        this.tripName = tripName;
    }

    public long getItineraryId() {
        return itineraryId;
    }

    public void setItineraryId(long itineraryId) {
        this.itineraryId = itineraryId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassport() {
        return passport;
    }

    public void setPassport(String passport) {
        this.passport = passport;
    }

    public String getTripName() {
        return tripName;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    @Override
    public String toString() {
        return "ItineraryDetailsDTO{" +
                "itineraryId=" + itineraryId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", passport='" + passport + '\'' +
                ", tripName='" + tripName + '\'' +
                '}';
    }
}
