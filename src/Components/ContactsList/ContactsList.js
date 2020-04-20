import React from "react";
import { v4 as uuidv4 } from "uuid"; // uuidv4()
import ContactListItem from "../ContactsItem/ContactListItem";
import { ToastContainer } from 'react-toastify';


const ContactsList = ({ contactList, deleteContact }) => {
  return (
    <ul>
      {contactList.map((el) => (
        <ContactListItem key={uuidv4()} name={el.name} number={el.number} deleteContact={deleteContact} contact={el} />
      ))}
      <ToastContainer />
    </ul>
  );
};

export default ContactsList;
