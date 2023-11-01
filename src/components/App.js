import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
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
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    console.log(`Name: ${name}, Number: ${number}`);
    !this.state.contacts.some(contact => contact.name === name) &&
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number }],
      }));
    console.log(this.state);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.state });
  };
  render() {
    const { name, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
