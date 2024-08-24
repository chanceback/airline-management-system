package com.cback.airline.management.system.flight;

import com.cback.airline.management.system.airport.Airport;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "flights")
public class Flight {
    protected Flight() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long flightId;

    @ManyToOne
    @JoinColumn(name = "departure_airport", referencedColumnName = "airportId", nullable = true)
    private Airport departureAirport;

    @ManyToOne
    @JoinColumn(name = "arrival_airport", referencedColumnName = "airportId", nullable = true)
    private Airport arrivalAirport;

    @Column(nullable = false)
    private LocalDateTime arrivalTime;

    @Column(nullable = false)
    private LocalDateTime departureTime;

    @Column(nullable = false)
    private int airFare;

    @Column(nullable = false)
    private int capacity;


    public Flight(long flightId, Airport departureAirport, Airport arrivalAirport, LocalDateTime arrivalTime, LocalDateTime departureTime, int airFare, int capacity) {
        this.flightId = flightId;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;
        this.airFare = airFare;
        this.capacity = capacity;
    }

    public Flight(Airport departureAirport, Airport arrivalAirport, LocalDateTime arrivalTime, LocalDateTime departureTime, int airFare, int capacity) {
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;
        this.airFare = airFare;
        this.capacity = capacity;
    }

    public long getFlightId() {
        return flightId;
    }

    public void setFlightId(long flightId) {
        this.flightId = flightId;
    }

    public Airport getDepartureAirport() {
        return departureAirport;
    }

    public void setDepartureAirport(Airport departureAirport) {
        this.departureAirport = departureAirport;
    }

    public Airport getArrivalAirport() {
        return arrivalAirport;
    }

    public void setArrivalAirport(Airport arrivalAirport) {
        this.arrivalAirport = arrivalAirport;
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
        return "Flight{" +
                "flightId=" + flightId +
                ", departureAirport=" + departureAirport +
                ", arrivalAirport=" + arrivalAirport +
                ", arrivalTime=" + arrivalTime +
                ", departureTime=" + departureTime +
                ", airFare=" + airFare +
                ", capacity=" + capacity +
                '}';
    }
}
