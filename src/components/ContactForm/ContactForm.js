import React, { Component } from 'react';
import { Formik } from 'formik';
import propTypes from 'prop-types';
import { Button } from 'components/common/CommonStyled';
import {
  ContactFormStyled,
  ContactLabel,
  ContactField,
} from './ContactFormStyled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    this.props.onSubmit(name, number);
    resetForm();
  };

  render() {
    return (
      <Formik initialValues={this.state} onSubmit={this.handleSubmit}>
        <ContactFormStyled>
          <ContactLabel htmlFor="name">
            Name
            <ContactField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactLabel>

          <ContactLabel htmlFor="number">
            Number
            <ContactField
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactLabel>
          <Button type="submit">Add contact</Button>
        </ContactFormStyled>
      </Formik>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  initialValues: propTypes.object,
  onSubmit: propTypes.func,
};
