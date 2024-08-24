package com.cback.airline.management.system.ticket;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    @Query("SELECT t FROM Ticket t WHERE t.itineraryId.itineraryId = :itineraryId")
    List<Ticket> findTicketsByItineraryId(@Param("itineraryId") Long itineraryId);
}
