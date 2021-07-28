import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from "./ContactForm.module.css";
import { useAlert } from "react-alert";
import { getAllContacts } from '../../redux/phonebook/phonebook-selectors';
import operations from '../../redux/phonebook/phonebook-operations';

const initialState = {                           //INITIAL_STATE
  id: '',  
  name: '',
  number: '',
};

//const Contacts = () => {
export default function Contacts  ()  {
  const alert = useAlert();
  const dispatch = useDispatch();
 
  const contacts = useSelector(getAllContacts);

  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const handleSaveItem = (item) => dispatch(operations.addContact(item));

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(), 
          name,
      number: Number(number),
    };

    if (contacts.some((contact) => contact.name === newItem.name)) {
      alert.show(`${newItem.name} is already in your contacts`);
      return;
    }

    handleSaveItem(newItem);
  };

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

    
    return (
      <form className={styles.Form} onSubmit={handleSubmit}>
        
          <label className={styles.Label}>
            Name
            <input
                className={styles.Input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}  // // {this.state.name} -  значення передає в локальний стейт
                onChange={handleChange}
            />
          </label>
        
          <label className={styles.Label}>
            Number
            <input
                className={styles.Input}
                type="tel"
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                required
                value={number}      // {this.state.number}
                onChange={ handleChange }
            />
          </label>
        
            <button className={styles.Button} type="submit">
              Add contact
            </button>
      </form>
    )
}

Contacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//export default Contacts;