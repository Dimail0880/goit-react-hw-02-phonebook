import React from "react";

const ContactListItem = ({ contact, name, number, deleteContact, id }) => {
  return (
    <li>
      {name}: {number}    
        <button id={id} onClick={() => deleteContact(contact.id)} >Delete</button>

    </li>
  );
};

export default ContactListItem;
