package com.cback.airline.management.system.itinerary;

import com.cback.airline.management.system.flight.FlightDetailsDTO;
import com.cback.airline.management.system.flight.FlightService;
import com.cback.airline.management.system.passenger.Passenger;
import com.cback.airline.management.system.passenger.PassengerService;
import com.cback.airline.management.system.ticket.TicketDTO;
import com.cback.airline.management.system.ticket.TicketService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItineraryService {
    private final ItineraryRepository repository;
    private final PassengerService passengerService;
    private final TicketService ticketService;
    private final FlightService flightService;

    public ItineraryService(ItineraryRepository repository, PassengerService passengerService, TicketService ticketService, FlightService flightService) {
        this.repository = repository;
        this.passengerService = passengerService;
        this.ticketService = ticketService;
        this.flightService = flightService;
    }

    public Itinerary createItinerary(ItineraryDTO itineraryDTO) {
        // get passenger associated with ItineraryDTO
        Optional<Passenger> passengerOpt = passengerService.getPassengerById(itineraryDTO.getPassengerId());

        if (passengerOpt.isEmpty()) {
            throw new RuntimeException("Passenger not found");
        }

        Passenger passenger = passengerOpt.get();

        // create new Itinerary from DTO
        Itinerary itinerary = ItineraryMapper.toEntity(itineraryDTO, passenger);

        return repository.save(itinerary);
    }

    public void deleteItinerary( long id) {
        repository.deleteById(id);
    }

    public List<ItineraryDetailsDTO> getALlItineraries() {
        List<Itinerary> itineraries = repository.findAll();

        return itineraries.stream()
                .map(itinerary -> new ItineraryDetailsDTO(
                       itinerary.getItineraryId(),
                       itinerary.getPassengerId().getFirstName(),
                       itinerary.getPassengerId().getLastName(),
                       itinerary.getPassengerId().getPassport(),
                       itinerary.getTripName()
                ))
                .collect(Collectors.toList());

    }

    public List<FlightDetailsDTO> getFlightPath(long id) {
        List<TicketDTO> ticketDTOs = ticketService.getTicketDTOsByItineraryId(id);

        List<Long> flightIdsList = ticketDTOs.stream().map(TicketDTO::getFlightId).collect(Collectors.toList());

        return flightService.getFlightsTableByIds(flightIdsList);
    }


}
