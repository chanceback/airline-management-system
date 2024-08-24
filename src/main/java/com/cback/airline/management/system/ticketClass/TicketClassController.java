package com.cback.airline.management.system.ticketClass;

import com.cback.airline.management.system.ticket.Ticket;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ticketClasses")
public class TicketClassController {
    private final TicketClassService service;

    public TicketClassController(TicketClassService service) {
        this.service = service;
    }

    @PostMapping("")
    public ResponseEntity<TicketClass> createTicketClass(@RequestBody TicketClass ticketClass) {
        TicketClass ticketClassCreated = service.createTicketClass(ticketClass);

        return ResponseEntity.status(HttpStatus.CREATED).body(ticketClassCreated);
    }

    @GetMapping("")
    public ResponseEntity<List<TicketClass>> getAllTicketClasses() {
        List<TicketClass> ticketClasses = service.getAllTicketClasses();

        return ResponseEntity.ok(ticketClasses);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicketClass(@PathVariable long id) {
        service.deleteTicketClass(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketClass> updateTicketClass(@PathVariable long id, @RequestBody TicketClass ticketClass) {
        ticketClass.setTicketClassId(id);
        TicketClass updatedTicketClass = service.updateTicketClass(ticketClass);

        return ResponseEntity.ok(updatedTicketClass);
    }
}
