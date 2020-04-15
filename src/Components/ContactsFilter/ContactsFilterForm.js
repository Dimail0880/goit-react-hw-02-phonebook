import React from 'react';

const ContactsFilterForm = ({handleFilter}) => {
    return (
        <div>
             <p>Find contact by name</p>
      <input type="text" onChange={handleFilter} />
        </div>
    );
};

export default ContactsFilterForm;