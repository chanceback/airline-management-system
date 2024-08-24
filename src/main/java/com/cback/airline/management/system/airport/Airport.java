package com.cback.airline.management.system.airport;

import jakarta.persistence.*;

@Entity
@Table(name = "airports")
public class Airport {
    protected Airport() {}

    @Id
    private String airportId;

    @Column(nullable = false, length = 255)
    private String airportName;

    @Column(nullable = false, length = 255)
    private String airportLocation;

    public Airport(String airportId, String airportName, String airportLocation) {
        this.airportId = airportId;
        this.airportName = airportName;
        this.airportLocation = airportLocation;
    }

    public String getAirportId() {
        return airportId;
    }

    public void setAirportId(String airportId) {
        this.airportId = airportId;
    }

    public String getAirportName() {
        return airportName;
    }

    public void setAirportName(String airportName) {
        this.airportName = airportName;
    }

    public String getAirportLocation() {
        return airportLocation;
    }

    public void setAirportLocation(String airportLocation) {
        this.airportLocation = airportLocation;
    }

    @Override
    public String toString() {
        return "Airport{" +
                "airport_id=" + airportId +
                ", airport_name='" + airportName + '\'' +
                ", airport_location='" + airportLocation + '\'' +
                '}';
    }
}
