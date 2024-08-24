import React from "react";
import TicketClassesTable from "../components/tables/TicketClassesTable";
import { useState, useEffect } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function TicketClassesPage({ setTicketClassToUpdate }) {
  // Use navigate for updating
  const navigate = useNavigate();

  // Use state to bring in the ticket classes data
  const [ticketClasses, setTicketClasses] = useState([]);

  // RETRIEVE the list of ticket classes
  const loadClasses = async () => {
    const response = await fetch(`${API_URL}/ticketClasses`);
    const ticketClasses = await response.json();
    setTicketClasses(ticketClasses);
  };

  // UPDATE
  const onEditTicketClasses = async (ticketCLass) => {
    setTicketClassToUpdate(ticketCLass);
    navigate("../ticket-classes-edit");
  };

  // CREATE
  const navigateToCreate = () => {
    navigate("../ticket-classes-add");
  };

  // DELETE
  const onDeleteTicketClasses = async (id) => {
    const response = await fetch(`${API_URL}/ticketClasses/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const getResponse = await fetch(`${API_URL}/ticketClasses`);
      const ticket_classes = await getResponse.json();
      setTicketClasses(ticket_classes);
    } else {
      console.error(
        `Failed to delete ticket class with id = ${id}, status code = ${response.status}`
      );
      alert(
        "Ticket Class could not be deleted. It's likely being used by an active ticket."
      );
    }
  };

  // LOAD
  useEffect(() => {
    loadClasses();
  }, []);

  return (
    <>
      <h1>Ticket Classes</h1>
      <TicketClassesTable
        ticketClasses={ticketClasses}
        onEdit={onEditTicketClasses}
        onDelete={onDeleteTicketClasses}
      />
      <button onClick={navigateToCreate}>Create New Ticket Class</button>
    </>
  );
}

export default TicketClassesPage;
