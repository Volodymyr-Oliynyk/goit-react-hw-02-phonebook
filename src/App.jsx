import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label htmlFor='name'>Name</label>
        <input 
          type="text"
          name="name"
          
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
       {this.state.contacts.map(contact => (
        <li key={nanoid()}>
          {contact.name}
        </li>
       ))}
      </ul>
      </div>
    );
  }
}
