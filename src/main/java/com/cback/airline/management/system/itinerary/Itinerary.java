package com.cback.airline.management.system.itinerary;

import com.cback.airline.management.system.passenger.Passenger;
import com.cback.airline.management.system.ticket.Ticket;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "itineraries")
public class Itinerary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itineraryId;

    @ManyToOne
    @JoinColumn(name = "passenger_id", referencedColumnName = "passengerId", nullable = false)
    private Passenger passengerId;

    @Column(unique = true, length = 255, nullable = false)
    private String tripName;

    @OneToMany(mappedBy = "itineraryId", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<Ticket> tickets;


    public Itinerary(long itineraryId, Passenger passengerId, String tripName) {
        this.itineraryId = itineraryId;
        this.passengerId = passengerId;
        this.tripName = tripName;
    }

    public Itinerary(Passenger passengerId, String tripName) {
        this.passengerId = passengerId;
        this.tripName = tripName;
    }

    protected Itinerary() {}

    public long getItineraryId() {
        return itineraryId;
    }

    public void setItineraryId(long itineraryId) {
        this.itineraryId = itineraryId;
    }

    public Passenger getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Passenger passengerId) {
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
        return "Itinerary{" +
                "itineraryId=" + itineraryId +
                ", passengerId=" + passengerId +
                ", tripName='" + tripName + '\'' +
                '}';
    }
}
