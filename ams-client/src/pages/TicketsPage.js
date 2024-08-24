import React from 'react';
import TicketsTable from '../components/tables/TicketsTable';
import { useState, useEffect } from 'react';
import { API_URL } from '../API';

function TicketsPage() {

    // Use state to bring in the data
    const [tickets, setTickets] = useState([]);

    // RETRIEVE the list of ticket classes
    const loadTickets = async () => {
        const response = await fetch(`${API_URL}/tickets`);
        const tickets = await response.json();
        setTickets(tickets);
    } 

    // LOAD 
    useEffect(() => {
        loadTickets();
    }, []);

    return(
        <>
        <h1>Tickets</h1>
        <p>Tickets are created through the booking page. To delete a ticket, delete the Itinerary containing the ticket.</p>
        <TicketsTable tickets={tickets} />
        </>
    )
};

export default TicketsPage;