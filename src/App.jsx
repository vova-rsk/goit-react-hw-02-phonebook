import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  /*method for filtering contacts*/
  contactsFiltering = key => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(key.toLowerCase()),
    );
  };

  /*method for adding an item to contacts*/
  contactAdding = newContact => {
    this.setState(({ contacts, filter }) => ({
      contacts: [...contacts, newContact],
      filter,
    }));
  };

  /*method for removing an item from contacts*/
  contactRemoving = id => {
    this.setState(({ contacts, filter }) => {
      return {
        contacts: contacts.filter(elem => elem.id !== id),
        filter,
      };
    });
  };

  /*method for checking the presence of a contact with the specified name*/
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

  /*method for handling data input to input-elem*/
  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value.trim() });
  }

  /*method for generating markup*/
  render() {
    const { filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          availabilityСheck={this.availabilityСheck}
          contactAdding={this.contactAdding}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange.bind(this)} />
        <ContactList
          contacts={this.contactsFiltering(filter)}
          contactRemoving={this.contactRemoving}
        />
      </Container>
    );
  }
}

export default App;
