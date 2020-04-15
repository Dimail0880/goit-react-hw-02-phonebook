import React, { Component } from "react";
import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList";
import { v4 as uuidv4 } from "uuid"; // uuidv4()
import ContactsFilterForm from './Components/ContactsFilter/ContactsFilterForm'


class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: "",
    number: ""
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };


    if (this.state.contacts.some(
      (el) => el.name === this.state.name))
     { alert(`${this.state.name} is already in contacts.`);
     
    } else {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: "",
    })
    )
  };
  };

  handleFilter = (e) => {
    this.setState({filter: e.target.value})
  }

  getFilteredContacts = (filterValue, contacts) => (
      contacts.filter((el) => 
       el.name.toLowerCase().includes(filterValue.toLowerCase())
      )

  );



  render() {
    const filteredContacts = this.getFilteredContacts(this.state.filter, this.state.contacts );
    return (
      <>
        <Form
          name={this.state.name}
          number={this.state.number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <ContactsList  contactList={filteredContacts} />
       
       
       
       { this.state.contacts.length >= 2 &&
         <ContactsFilterForm handleFilter={this.handleFilter} />
}
          

        
      </>
    );
  }
}

export default App;
