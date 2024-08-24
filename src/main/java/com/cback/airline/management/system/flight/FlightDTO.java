package com.cback.airline.management.system.flight;

import java.time.LocalDateTime;

public class FlightDTO {
    private long flightId;
    private String departureAirportId;
    private String arrivalAirportId;
    private LocalDateTime arrivalTime;
    private LocalDateTime departureTime;
    private int airFare;
    private int capacity;

    public FlightDTO(Long flightId, String departureAirportId, String arrivalAirportId, LocalDateTime arrivalTime, LocalDateTime departureTime, int airFare, int capacity) {
        this.flightId = flightId;
        this.departureAirportId = departureAirportId;
        this.arrivalAirportId = arrivalAirportId;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;
        this.airFare = airFare;
        this.capacity = capacity;
    }

    public FlightDTO(String departureAirportId, String arrivalAirportId, LocalDateTime arrivalTime, LocalDateTime departureTime, int airFare, int capacity) {
        this.departureAirportId = departureAirportId;
        this.arrivalAirportId = arrivalAirportId;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;
        this.airFare = airFare;
        this.capacity = capacity;
    }

    protected FlightDTO() {};

    public long getFlightId() {
        return flightId;
    }

    public void setFlightId(long flightId) {
        this.flightId = flightId;
    }

    public String getDepartureAirportId() {
        return departureAirportId;
    }

    public void setDepartureAirportId(String departureAirportId) {
        this.departureAirportId = departureAirportId;
    }

    public String getArrivalAirportId() {
        return arrivalAirportId;
    }

    public void setArrivalAirportId(String arrivalAirportId) {
        this.arrivalAirportId = arrivalAirportId;
    }

    public LocalDateTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalDateTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public LocalDateTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalDateTime departureTime) {
        this.departureTime = departureTime;
    }

    public int getAirFare() {
        return airFare;
    }

    public void setAirFare(int airFare) {
        this.airFare = airFare;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    @Override
    public String toString() {
        return "FlightDTO{" +
                "flightId=" + flightId +
                ", departureAirportId='" + departureAirportId + '\'' +
                ", arrivalAirportId='" + arrivalAirportId + '\'' +
                ", arrivalTime=" + arrivalTime +
                ", departureTime=" + departureTime +
                ", airFare=" + airFare +
                ", capacity=" + capacity +
                '}';
    }
}
