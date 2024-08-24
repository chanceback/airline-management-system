package com.cback.airline.management.system.airport;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AirportService {

    private final AirportRepository repository;

    public AirportService(AirportRepository repository) {
        this.repository = repository;
    }

    public List<Airport> getAllAirports() {
        return repository.findAll();
    }

    public Airport createAirport(Airport airport) {
        return repository.save(airport);
    }

    public Airport updateAirport(Airport airport) {
        return repository.save(airport);
    }

    public void deleteAirport(String id) {
        repository.deleteById(id);
    }

    public Optional<Airport> getAirport(String id) {
        return repository.findById(id);
    }
}
