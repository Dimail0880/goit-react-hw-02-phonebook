import React, { Component } from "react";
import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList";
import { v4 as uuidv4 } from "uuid"; // uuidv4()

class App extends Component {
  state = {
    contacts: [],
    name: "",
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
      // number: this.state.number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      // number: "",
    }));
  };

  render() {
    // const { contacts, name } = this.state;
    // const filteredContacts = this.getFilteredContacts(filter, contacts);
    return (
      <>
        <Form
          name={this.state.name}
          // number={this.state.number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {/* <Filter handleChangeFilter={this.getFilterValue} /> */}
        <ContactsList
        contactList={this.state.contacts}
        // handleChange={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
