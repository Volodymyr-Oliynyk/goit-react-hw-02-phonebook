import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (values, action) => {
    const { name, number } = values;
    const { addContact } = this.props;

    addContact({
      id: nanoid(),
      name,
      number,
    });

    action.resetForm();
  };

  
//   //   this.props.onFormSubmit(this.state);
//   //   console.log(this.state);

//   //   this.reset();
//   // };

//   // reset = () => {
//   //   this.setState({
//   //     name: '',
//   //     number: '',
//   //   });
//   // };

  render() {
    const { name, number } = this.state;

    return (
      <Formik initialValues={this.state} onSubmit={this.handleSubmit}>
        <Form>
        <label htmlFor='name'>
          Name
          <Field
            className="container"
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor='number'>
          Number
          <Field
            className="container"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
      </Formik>
      );
  }
}