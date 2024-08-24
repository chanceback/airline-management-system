package com.cback.airline.management.system.flight;

import com.cback.airline.management.system.airport.Airport;
import com.cback.airline.management.system.airport.AirportService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FlightService {
    private final FlightRepository repository;
    private final AirportService airportService;

    public FlightService(FlightRepository repository, AirportService airportService) {
        this.repository = repository;
        this.airportService = airportService;
    }

    public Flight createFlight(FlightDTO flightDto) {

        Optional<Airport> arrivalAirportOpt = airportService.getAirport(flightDto.getArrivalAirportId());
        Optional<Airport> departureAirportOpt = airportService.getAirport(flightDto.getDepartureAirportId());


        if (arrivalAirportOpt.isEmpty() || departureAirportOpt.isEmpty()) {
            throw new RuntimeException("Arrival or departure airport not found");
        }

        Airport arrivalAirport = arrivalAirportOpt.get();
        Airport departureAirport = departureAirportOpt.get();

        Flight flight = FlightMapper.toEntity(flightDto, departureAirport, arrivalAirport);

        return repository.save(flight);
    }

    public Flight updateFlight(FlightDTO flightDto) {

        Optional<Airport> arrivalAirportOpt = airportService.getAirport(flightDto.getArrivalAirportId());
        Optional<Airport> departureAirportOpt = airportService.getAirport(flightDto.getDepartureAirportId());


        if (arrivalAirportOpt.isEmpty() || departureAirportOpt.isEmpty()) {
            throw new RuntimeException("Arrival or departure airport not found");
        }

        Airport arrivalAirport = arrivalAirportOpt.get();
        Airport departureAirport = departureAirportOpt.get();

        Flight flight = FlightMapper.toEntity(flightDto, departureAirport, arrivalAirport);

        return repository.save(flight);
    }

    public void deleteFlight(long id) {
        repository.deleteById(id);
    }

    public List<FlightDetailsDTO> getFlightsTable() {
        List<Flight> flights = repository.findAll();

        return flights.stream()
                .map(flight -> new FlightDetailsDTO(
                        flight.getFlightId(),
                        flight.getDepartureAirport().getAirportName(),
                        flight.getArrivalAirport().getAirportName(),
                        flight.getDepartureTime().toString(),
                        flight.getArrivalTime().toString(),
                        flight.getAirFare(),
                        flight.getCapacity()
                ))
                .collect(Collectors.toList());


    }

    public List<Flight> getFlightsByIds(List<Long> ids) {
        return repository.findAllById(ids);
    }

    public List<FlightDetailsDTO> getFlightsTableByIds(List<Long> ids) {
        List<Flight> flights = repository.findAllById(ids);

        return flights.stream()
                .map(flight -> new FlightDetailsDTO(
                        flight.getFlightId(),
                        flight.getDepartureAirport().getAirportName(),
                        flight.getArrivalAirport().getAirportName(),
                        flight.getDepartureTime().toString(),
                        flight.getArrivalTime().toString(),
                        flight.getAirFare(),
                        flight.getCapacity()
                ))
                .collect(Collectors.toList());


    }


}
