package com.cback.airline.management.system.ticket;

import com.cback.airline.management.system.flight.Flight;
import com.cback.airline.management.system.flight.FlightService;
import com.cback.airline.management.system.itinerary.ItineraryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TicketService {
    private final TicketRepository repository;

    public TicketService(TicketRepository repository) {
        this.repository = repository;
    }

    public List<TicketDTO> getTicketsTable() {
        List<Ticket> tickets = repository.findAll();

        return tickets.stream().map(TicketMapper::toDTO).collect(Collectors.toList());
    }

    public Ticket createTicket(Ticket ticket) {
        return repository.save(ticket);
    }

    public List<TicketDTO> getTicketDTOsByItineraryId(long id) {
        List<Ticket> tickets = repository.findTicketsByItineraryId(id);

        return tickets.stream().map(TicketMapper::toDTO).collect(Collectors.toList());
    }
}
