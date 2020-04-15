import React, { Children } from 'react';
import { v4 as uuidv4 } from 'uuid'; // uuidv4()
import ContactListItem from "./ContactListItem"
import ContactsFilter from '../ContactsFilter/ContactsFilterForm';

const ContactsList = ({contactList}) => {
    return (
        <div>
            <h2>Contacts</h2>
          
            <ul>
    { contactList.map((el) => (<ContactListItem key={uuidv4()} name={el.name} number={el.number}/>))}

            </ul>
            
        </div>

    );
    
};

export default ContactsList;