package com.cback.airline.management.system.itinerary;

import com.cback.airline.management.system.passenger.Passenger;

public class ItineraryMapper {
    public static ItineraryDTO toDTO(Itinerary itinerary) {
        return new ItineraryDTO(
                itinerary.getItineraryId(),
                itinerary.getPassengerId().getPassengerId(),
                itinerary.getTripName()
        );

    }

    public static Itinerary toEntity(ItineraryDTO itineraryDTO, Passenger passenger) {
        return new Itinerary(
                passenger,
                itineraryDTO.getTripName()
        );

    }


}
