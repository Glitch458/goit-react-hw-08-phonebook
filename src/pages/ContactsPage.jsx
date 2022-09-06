import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
