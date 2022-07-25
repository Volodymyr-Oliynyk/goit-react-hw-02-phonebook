import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormContact } from './components/FormContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // formSubmitHandler = data => {
  //   const newContact = {
  //     name: data.name,
  //     number: data.number,
  //     id: nanoid(),
  //   };
  //   this.setState(state => ({
  //     contacts: [...state.contacts, newContact],
  //   }));
  // };

  contactFilterHandler = e => {
    const search = e.target.value;
    const filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { contacts } = this.state;
    const contactFilterList = this.contactFilterHandler;
    return (
      <div>
        <h1>Phonebook</h1>
        <FormContact onFormSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>

        <p>Find contacts by name</p>
        <input
          type="text"
          placeholder="Search contact"
          onChange={contactFilterList}
        />

        <ul>
          {/* {contactFilterList === '' ? (contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}:{contact.number} </li>))) : (contactFilterList)
          } */}
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
