import ContactItem from 'components/ContactItem';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux/es/exports';
import { useGetContactQuery } from 'redux/ContactApi';

const ContactList = () => {
  const filterValue = useSelector(state => state.filterValue);
  const { data } = useGetContactQuery();

  const filteredContacts = () =>
    data.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );

  return (
    <>
      <ul className={styles.list}>
        {data &&
          filteredContacts().map(({ name, number, id }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
