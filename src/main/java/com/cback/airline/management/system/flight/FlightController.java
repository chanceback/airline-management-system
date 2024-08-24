package com.cback.airline.management.system.flight;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flights")
public class FlightController {
    private final FlightService service;

    public FlightController( FlightService service) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<List<FlightDetailsDTO>> getFlightsTable() {

        List<FlightDetailsDTO> flightsTable = service.getFlightsTable();

        return ResponseEntity.ok(flightsTable);
    }

    @PostMapping("")
    public ResponseEntity<Flight> createFlight(@RequestBody FlightDTO flightDto) {
        Flight flight = service.createFlight(flightDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(flight);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFlight(@PathVariable long id) {
            service.deleteFlight(id);
            return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Flight> updateFlight(@RequestBody FlightDTO flightDTO) {
        Flight flight = service.updateFlight(flightDTO);
        return ResponseEntity.ok(flight);


    }
}
