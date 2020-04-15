import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // uuidv4()

const Form = ({name, contacts, number, handleChange, handleSubmit}) => {

    
    
     
    return (
        <div>
            <h2>Phonebook</h2>
            <form autoComplete="off" onSubmit={handleSubmit} >
            <h4>Name</h4>
            <input 
            name="name" 
            type="text" 
            value={name}
            onChange={handleChange}></input>

            <h4>Number</h4>
            <input 
            name="number" 
            type="text" 
            value={number}
            onChange={handleChange}></input>
            <button type="submit" >Add contact</button>
            </form>
        </div>
    );
};

export default Form;