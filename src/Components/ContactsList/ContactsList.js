import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // uuidv4()
import ContactListItem from "./ContactListItem"

const ContactsList = ({contactList}) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
    { contactList.map((el) => (<ContactListItem key={uuidv4()} name={el.name}/>))}

            </ul>
        </div>
    );
};

export default ContactsList;