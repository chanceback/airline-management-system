package com.cback.airline.management.system.flight;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Long> {

//    @Query(value = "SELECT new FlightDetailsDTO(f.flightId, d.airportName, a.airportName, f.departureTime, f.arrivalTime)"
//            + " from Flight f, Airport d, Airport a"
//            + " where f.departureAirport=d.airportId"
//            + " and f.arrivalAirport=a.airportId"
//    )
//    List<FlightDetailsDTO> findCustomFlightDetails()

}
