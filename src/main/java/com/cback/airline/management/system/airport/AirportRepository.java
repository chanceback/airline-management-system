package com.cback.airline.management.system.airport;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository  extends JpaRepository<Airport, String> {
}
