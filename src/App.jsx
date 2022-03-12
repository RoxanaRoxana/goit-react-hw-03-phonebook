import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts';
import { Section } from 'components/Section';
import AddForm from 'components/AddForm';
import { ContactsFilter } from 'components/ContactFilter';
import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const newNumbers = this.state.contacts;
    const prevNumbers = prevState.contacts;

    if (newNumbers !== prevNumbers) {
      localStorage.setItem('contacts', JSON.stringify(newNumbers));
    }
  }
  
   deleteContact = id => {
  this.setState(({ contacts }) => ({
     contacts: contacts.filter(contact => contact.id !== id),
   }));
 };

 getContacts = () => {
   const { contacts, filter } = this.state;

   return contacts.filter(contact =>
   contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
 };

 

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = { id: nanoid(), name: name, number: number };
    contacts.some(item => item.name === name)
      ? alert(`${name} is already on list!`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const contactList = this.getContacts();

    return (
      <div>
        <Section title="Phonebook">
          <AddForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <ContactsFilter
            value={this.state.filter}
            onChange={this.handleChange}
          />
          <Contacts
            contacts={contactList}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
