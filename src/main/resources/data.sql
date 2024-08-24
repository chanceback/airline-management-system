INSERT INTO Passengers (first_name, last_name, passport, email, phone_number)
VALUES
('Sterling', 'Archer', '542637785', 'archer@hello.com', '814-825-5951'),
('Stede', 'Bonnet', '919608451', 'bonnet@hello.com', '919-252-6000'),
('Steve', 'Harrington', '135516591', 'harrington@hello.com', '505-820-2961'),
('Mabel', 'Mora', '637071702', 'mora@hello.com', '315-794-6533'),
('Michael', 'Scott', '571921982', 'scott@hello.com', '716-475-1975'),
('Buffy', 'Summers', '678996728', 'summers@hello.com', '813-273-1085'),
('Jeff', 'Winger', '218571886', 'winger@hello.com', '408-558-2426');

INSERT INTO Airports (airport_id, airport_name, airport_location)
VALUES
('KLGA', 'LaGuardia Airport', 'New York'),
('YSSY', 'Sydney Airport', 'Australia'),
('EIDW', 'Dublin Airport', 'Ireland'),
('LIMC', 'Malpensa Airport', 'Milan'),
('RKSI', 'Incheon Airport', 'Seoul'),
('LEZL', 'Seville Airport', 'Spain'),
('RJAA', 'Narita Airport', 'Tokyo');


INSERT INTO flights (departure_airport, arrival_airport, departure_time, arrival_time, air_fare, capacity)
VALUES
((SELECT airport_id FROM airports WHERE airport_name = 'LaGuardia Airport'),
 (SELECT airport_id FROM airports WHERE airport_name = 'Sydney Airport'),
 '2022-10-30T08:00:00', '2022-10-30T14:00:00', 5000, 70),

((SELECT airport_id FROM airports WHERE airport_name = 'Sydney Airport'),
 (SELECT airport_id FROM airports WHERE airport_name = 'Incheon Airport'),
 '2022-11-01T07:00:00', '2022-11-01T15:00:00', 5000, 70),

((SELECT airport_id FROM airports WHERE airport_name = 'LaGuardia Airport'),
 (SELECT airport_id FROM airports WHERE airport_name = 'Narita Airport'),
 '2023-02-20T08:00:00', '2023-02-21T20:00:00', 5000, 70);


INSERT INTO itineraries (passenger_id, trip_name)
VALUES
(
    (SELECT passenger_id FROM passengers WHERE passport = '542637785'),
    'Archer Vacation 2022'
),
(
    (SELECT passenger_id FROM passengers WHERE passport = '919608451'),
    'Bonnet Business Trip'
),
(
    (SELECT passenger_id FROM passengers WHERE passport = '678996728'),
    'Buffy Family Trip'
);

INSERT INTO ticket_classes (class_name, upgrade_charge)
VALUES
('First Class', 5000),
('Business', 1000),
('Premium Economy', 500),
('Economy', 0);

INSERT INTO tickets (itinerary_id, flight_id, ticket_class_id) VALUES
(
    (SELECT itinerary_id FROM itineraries WHERE trip_name = 'Archer Vacation 2022'),
    (SELECT flight_id FROM flights WHERE flight_id = 1),
    (SELECT ticket_class_id FROM ticket_classes WHERE class_name = 'First Class')
),
(
    (SELECT itinerary_id FROM itineraries WHERE trip_name = 'Bonnet Business Trip'),
    (SELECT flight_id FROM flights WHERE flight_id = 1),
    (SELECT ticket_class_id FROM ticket_classes WHERE class_name = 'Business')
),
(
    (SELECT itinerary_id FROM itineraries WHERE trip_name = 'Bonnet Business Trip'),
    (SELECT flight_id FROM flights WHERE flight_id = 2),
    (SELECT ticket_class_id FROM ticket_classes WHERE class_name = 'Business')
),
(
    (SELECT itinerary_id FROM itineraries WHERE trip_name = 'Buffy Family Trip'),
    (SELECT flight_id FROM flights WHERE flight_id = 3),
    (SELECT ticket_class_id FROM ticket_classes WHERE class_name = 'Economy')
);