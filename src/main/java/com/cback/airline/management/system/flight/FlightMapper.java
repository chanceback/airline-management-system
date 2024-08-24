package com.cback.airline.management.system.flight;

import com.cback.airline.management.system.airport.Airport;

public class FlightMapper {
    public static FlightDTO toDTO(Flight flight) {
        return new FlightDTO(
                flight.getFlightId(),
                flight.getDepartureAirport().getAirportId(),
                flight.getArrivalAirport().getAirportId(),
                flight.getArrivalTime(),
                flight.getDepartureTime(),
                flight.getAirFare(),
                flight.getCapacity()
        );
    }

    public static Flight toEntity(FlightDTO flightDTO, Airport departureAirport, Airport arrivalAirport) {
        return new Flight(
                departureAirport,
                arrivalAirport,
                flightDTO.getArrivalTime(),
                flightDTO.getDepartureTime(),
                flightDTO.getAirFare(),
                flightDTO.getCapacity()
        );
    }
}
