import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onSubmitButtonClick = e => {
    e.preventDefault();

    this.setState(({ contacts, name, number }) => {
      if (!name || !number) {
        return;
      }

      const contactToAdd = {
        id: uuidv4(),
        name,
        number,
      };

      return {
        contacts: [...contacts, contactToAdd],
        name: '',
        number: '',
      };
    });
  };

  onInputChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value.trim() });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onInputChange={this.onInputChange}
          onSubmitButtonClick={this.onSubmitButtonClick}
        />

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
