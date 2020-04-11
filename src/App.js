import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'; // uuidv4()
import Phonebook from "./Components/Phonebook/Phonebook";
import Contacts from "./Components/Contacts/Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  enterName = () => {

  }



  render() {
    const id = uuidv4()
   console.log(id) 
    return <div className="App">
      <Phonebook/>
      <Contacts/>
    </div>;
  }
}


export default App;
