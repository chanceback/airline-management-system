import React from 'react';
import { useNavigate } from 'react-router-dom'
import BookingPassengersTable from '../components/tables/BookingPassengerTable';

function BookingPassengersPage({setBookingPassenger, passengers}) {
    // Use navigate for updating
    const navigate = useNavigate()

    const onBook = passenger => {
        setBookingPassenger(passenger)
        navigate('../booking-add')
    }

    return(
        <>
        <BookingPassengersTable 
            passengers={passengers}
            onBook={onBook}/>
        </>
    )
};

export default BookingPassengersPage;