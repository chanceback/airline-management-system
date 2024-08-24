package com.cback.airline.management.system.passenger;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {
    Optional<Passenger> findByFirstNameAndLastName(String firstName, String lastName );

    @Query("SELECT p FROM Passenger p WHERE p.firstName = :firstName AND p.lastName = :lastName")
    List<Passenger> findPassengersByFirstNameAndLastName(@Param("firstName") String firstName, @Param("lastName") String lastName);
}
