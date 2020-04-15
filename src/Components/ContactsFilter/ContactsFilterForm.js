import React from 'react';

const ContactsFilterForm = ({handleFilter}) => {
    return (
        <form>
             <p>Find contact by name</p>
      <input type="text" onChange={handleFilter} />
        </form>
    );
};

export default ContactsFilterForm;