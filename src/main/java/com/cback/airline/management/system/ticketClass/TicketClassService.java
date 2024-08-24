package com.cback.airline.management.system.ticketClass;

import com.cback.airline.management.system.ticket.Ticket;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketClassService {
    private final TicketClassRepository repository;

    public TicketClassService(TicketClassRepository repository) {
        this.repository = repository;
    }

    public TicketClass createTicketClass(TicketClass ticketClass) {
        return repository.save(ticketClass);
    }

    public List<TicketClass> getAllTicketClasses() {
        return repository.findAll();
    }

    public void deleteTicketClass(long id) {
        repository.deleteById(id);
    }

    public TicketClass updateTicketClass(TicketClass ticketClass) {
        return repository.save(ticketClass);
    }

    public Optional<TicketClass> getTicketClass(long id) {
        return repository.findById(id);
    }


}
