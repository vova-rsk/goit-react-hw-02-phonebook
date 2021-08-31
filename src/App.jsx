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

  contactsFiltering = (key, arrayOfObjects) => {
    return arrayOfObjects.filter(({ name }) =>
      name.toLowerCase().includes(key.toLowerCase()),
    );
  };

  availabilityСheck = inputName => {
    const existingСontact = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
    );

    if (existingСontact) {
      alert(`${inputName} is already in contacts`);
      return true;
    }
    return false;
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      state: { name, number },
      availabilityСheck,
    } = this;

    if (!name || !number) {
      return;
    }

    if (availabilityСheck(name)) {
      return;
    }

    this.setState(({ contacts, name, number }) => {
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

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value.trim() });
  };

  render() {
    const {
      state: { contacts, filter, name, number },
      handleChange,
      handleSubmit,
      contactsFiltering,
    } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList contacts={contactsFiltering(filter, contacts)} />
      </div>
    );
  }
}

export default App;
