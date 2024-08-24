import React from "react";

function HomePage() {
    return(
        <>
        <h1>Home</h1>
        <p>
            Normandy Airlines is a national airline headquartered in New York City that primarily focuses on providing 
            affordable international flights to passengers located on the east coast. With hubs located at the John F. 
            Kennedy International Airport in New York and Atlanta International Airport in Georgia, the company is able 
            to accomplish this goal. The company currently services over 10,000 flights per year, with different locations 
            being more or less popular depending on the time of year. Normandy Airlines is looking for a way to track its 
            general flight logistics, such as passenger information, and flying habits to determine its most popular routes 
            throughout the year, so that it can add and remove flights accordingly. The recorded data will help determine which 
            flights and routes to direct resources to, so that Normandy Airlines can provide the best possible travel experience 
            in today’s competitive age of travel.
        </p>
        <p>
            The database used by Normandy Airlines for this purpose will track Airports that the company services as well as 
            specific Flights coming out of these Airports. It will track capacity on these flights to determine how many Tickets 
            are sold per flight to help determine popular destination routes. Tickets can be categorized in different Ticket_Classes 
            to determine additional charges associated with ticket costs. Passengers will purchase Itineraries which are made up of 
            multiple Tickets. This allows for ease of CRUD operations.
        </p>
        </>
    )
};

export default HomePage;