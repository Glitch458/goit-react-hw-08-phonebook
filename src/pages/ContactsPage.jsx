import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactsPage = () => {
  return (
    <div>
      <Form />
      <section className="section">
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
};

export default ContactsPage;
