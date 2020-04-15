import React from "react";

const ContactListItem = ({ name, number, deleteContact, id }) => {
  return (
    <li>
      {name}: {number}      <button id={id} onClick={deleteContact} >Delete</button>

    </li>
  );
};

export default ContactListItem;
