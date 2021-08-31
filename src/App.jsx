import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  filter = (key, arrayOfObjects) => {
    return arrayOfObjects.filter(elem =>
      elem.name.toLowerCase().includes(key.toLowerCase()),
    );
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
        filter: '',
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
    const filteredContacts = this.filter(
      this.state.filter,
      this.state.contacts,
    );

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
        <Filter onInputChange={this.onInputChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
