package com.cback.airline.management.system.passenger;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PassengerService {
    private final PassengerRepository repository;

    public PassengerService(PassengerRepository repository) {
        this.repository = repository;
    }

    public List<Passenger> getAllPassengers() {
        return repository.findAll();
    }

    public Optional<Passenger> getPassengerById(Long id) {
        return repository.findById(id);
    }

    public Passenger getPassengerByName(String firstName, String lastName) {
        Optional<Passenger> passengerOpt = repository.findByFirstNameAndLastName(firstName, lastName);

        return passengerOpt.orElse(null);
    }

    public List<Passenger> getPassengersByName( String firstName, String lastName) {
        return repository.findPassengersByFirstNameAndLastName(firstName, lastName);
    }

    public Passenger createPassenger(Passenger passenger) {
        return repository.save(passenger);
    }

    public Passenger updatePassenger(Passenger passenger) {
        return repository.save(passenger);
    }

    public void deletePassenger(long id) {
        repository.deleteById(id);
    }
}
