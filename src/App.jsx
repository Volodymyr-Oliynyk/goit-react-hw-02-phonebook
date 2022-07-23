import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {Form} from 'components/Form';


export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    };
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onFormSubmit={this.formSubmitHandler}/>
        <h2>Contacts</h2>

        <p>Find contacts by name</p> 
        {/* <input type="text"
          placeholder="Search contact"
          onChange={e => {
            const search = e.target.value; 
            const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));
            this.setState({ contacts: filteredContacts });
          }
        }            
            /> */}
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number} 
            </li> 
          ))}
        </ul>
      </div>
    );
  }
}
