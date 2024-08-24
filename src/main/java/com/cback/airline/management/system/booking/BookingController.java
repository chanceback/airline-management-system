package com.cback.airline.management.system.booking;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Book;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    private final BookingService service;

    public BookingController(BookingService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity<Long> createBooking(@RequestBody Booking booking) {
        Long id = service.createBooking(booking);

        return ResponseEntity.status(HttpStatus.CREATED).body(id);
    }
}
