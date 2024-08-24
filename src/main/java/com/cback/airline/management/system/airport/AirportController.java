package com.cback.airline.management.system.airport;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/airports")
public class AirportController {

    private final AirportService service;

    public AirportController(AirportService service) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<List<Airport>> getAllAirports() {
        List<Airport> airports = service.getAllAirports();
        return ResponseEntity.ok(airports);
    }

    @PostMapping("")
    public ResponseEntity<Airport> createAirport(@RequestBody Airport airport) {
        Airport createdAirport = service.createAirport(airport);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAirport);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Airport> updateAirport(@PathVariable String id, @RequestBody Airport airport) {
        airport.setAirportId(id);
        Airport updatedAirport = service.updateAirport(airport);

        return ResponseEntity.ok(updatedAirport);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAirport(@PathVariable String id) {
            service.deleteAirport(id);
            return ResponseEntity.noContent().build();
    }
}
