package com.cback.airline.management.system.itinerary;

import com.cback.airline.management.system.flight.Flight;
import com.cback.airline.management.system.flight.FlightDetailsDTO;
import com.cback.airline.management.system.flight.FlightService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/itineraries")
public class ItineraryController {
    private final ItineraryService service;

    public ItineraryController(ItineraryService service) {
        this.service = service;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItinerary(@PathVariable long id) {
        service.deleteItinerary(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/table")
    public ResponseEntity<List<ItineraryDetailsDTO>> getItineraryTable() {
        List<ItineraryDetailsDTO> itineraries = service.getALlItineraries();

        return ResponseEntity.ok(itineraries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<FlightDetailsDTO>> getItineraryFlightPath(@PathVariable long id) {
        List<FlightDetailsDTO> flightDetailsDTOS = service.getFlightPath(id);

        return ResponseEntity.ok(flightDetailsDTOS);
    }
}
