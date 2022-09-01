import { useState } from "react";
import styles from "./Form.module.css";
import { useGetContactQuery } from "redux/ContactApi";
import { useAddContactMutation } from "redux/ContactApi";

const Form = () => {
  const { data } = useGetContactQuery();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const newContact = {
      name,
      number,
    };
    const checkNewName = data.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (checkNewName) {
      alert(newContact.name + " is already in contacts");
      return;
    }

    addContact(newContact);
    resetForm();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">{isAdding ? "Adding..." : "Add contact"}</button>
      </form>
    </>
  );
};

export default Form;
