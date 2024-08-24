package com.cback.airline.management.system.passenger;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/passengers")
public class PassengerController {

    private final PassengerService service;

    public PassengerController(PassengerService service) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<List<Passenger>> findAll() {
        List<Passenger> passengers = service.getAllPassengers();
        return ResponseEntity.ok(passengers);
    }

    @GetMapping("/{fname}/{lname}")
    public ResponseEntity<List<Passenger>> getPassengerByName(@PathVariable String fname, @PathVariable String lname) {
        List<Passenger> passengers = service.getPassengersByName(fname, lname);

        return ResponseEntity.ok(passengers);
    }

    @PostMapping("")
    public ResponseEntity<Passenger> addPassenger(@RequestBody Passenger passenger) {
        Passenger passengerCreated = service.createPassenger(passenger);

        return ResponseEntity.status(HttpStatus.CREATED).body(passengerCreated);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Passenger> updatePassenger(@PathVariable Long id, @RequestBody Passenger passenger) {
        passenger.setPassengerId(id);
        Passenger updatePassenger = service.updatePassenger(passenger);

        return ResponseEntity.ok(updatePassenger);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePassenger(@PathVariable long id) {
            service.deletePassenger(id);
            return ResponseEntity.noContent().build();
    }


}
