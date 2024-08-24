import { React, useState } from "react";
import { API_URL } from "../API";
import { useNavigate } from "react-router-dom";

function UpdateTicketClassesPage({ ticketClass }) {
  const [class_name, setClass_name] = useState(ticketClass.className);
  const [upgrade_charge, setUpgrade_charge] = useState(
    ticketClass.upgradeCharge
  );

  const navigate = useNavigate();

  const editClasses = async () => {
    const response = await fetch(
      `${API_URL}/ticketClasses/${ticketClass.ticketClassId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          className: class_name,
          upgradeCharge: upgrade_charge,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      alert("Successfully edited the class!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update class. Status ${response.status}. ${errMessage.Error}`
      );
    }
    navigate("../ticket-classes");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editClasses();
  };

  return (
    <>
      <h1>Edit Class Information</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Class ID: {ticketClass.classId}</legend>
          <label for="class_name">Class Name</label>
          <input
            type="text"
            placeholder="Enter Class Name:"
            pattern="^[a-zA-Z \s]+$"
            maxlength="30"
            required
            value={class_name}
            onChange={(e) => setClass_name(e.target.value)}
            id="class_name"
          />
          <label for="upgrade_charge">Upgrade</label>
          <input
            type="number"
            placeholder="Enter Upgrade Charge:"
            pattern="[0-9]+"
            maxlength="5"
            minlength="3"
            required
            value={upgrade_charge}
            onChange={(e) => setUpgrade_charge(e.target.value)}
            id="upgrade_charge"
          />

          <label for="submit">
            <button id="submit">Save</button>
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default UpdateTicketClassesPage;
