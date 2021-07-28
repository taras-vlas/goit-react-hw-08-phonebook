import { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import { toast } from 'react-toastify';
import { connect } from 'react-redux'; // Імпорт функції коннекта до сховища
import { contactsOperations, contactsSelectors } from '../../redux/contacts'; // Імпорт операції додавання контакта і селектора усіх контактів
import AddTodoButton from '../AddTodoButton';
import styles from './HookForm.module.scss';



const initialState = {
  name: '',
  number: '',
};

// Компонент форми додавання контакта
const HookForm = ({ contacts, isLoading, onSubmit }) => {
  const [state, setState] = useState(initialState);
  const { name, number } = state;


  // Слідкує за інпутом
// eslint-disable-next-line
const handleChange = event => {
    const { name, value } = event.currentTarget;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Метод на відправці форми. Формує зі стейта контакт і передає у зовнішній метод
const handleSubmit = event => {
    event.preventDefault();

    const normalizedName = name.toLowerCase();

    // Перевірка на дублікат по імени
    const nameInContacts = contacts.find( 
      contact => contact.name === normalizedName,

    );

    // Перевірка на дублікат по номеру
    const numberInContacts = contacts.find(
      contact => contact.number === number,
    );

    // Відправка імени і номера післе перевірки (в проп-метод з контейнера)
    if (!nameInContacts && !numberInContacts) {
      onSubmit(normalizedName, number);
      resetForm();
      return;
    }

    toast.warning(`${name} is already in contacts`);
  };

  // Скинення полів форми (посля відтправки)
  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    {/* <form className={styles.form} onSubmit={() => this.handleIncrement({})}> */}
      
      {/* <label className={styles.label}>
        <span className={styles.label__text}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="Input for your name"
          className={styles.input}
          value={name} // Пишет значение в локальный стейт
          onChange={hanldeChange} // Наблюдающий метод
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          disabled={isLoading}
          required
        />
      </label> */}

        < div className={styles.HeaderWrapper}>
          {/* <h3>Find contacts by name</h3> */}
          <TextField
          label = "Name"       // Фільтрувати:  placeholder="Contact name"
          onChange={handleChange}  //{() => handleChange({})}
          value={name}                   //{this.state.name}
          // className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          disabled={isLoading}
          required
          />
        </div>

      {/* <label className={styles.label}>
        <span className={styles.label__text}>Number</span>
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="Input for your phone number"
          className={styles.input}
          value={number} // Пишет значение в локальный стейт
          onChange={hanldeChange} // Наблюдающий метод
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          disabled={isLoading}
          required
        />
      </label> */}

      <div className={styles.HeaderWrapper}>
          <TextField
            label = "Number"       // Фільтрувати
            onChange={handleChange}  //{() => handleChange({})}
            value={number}
            type="tel"
            // className={styles.input}
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            disabled={isLoading}
            required
          />
        </div>     

      <AddTodoButton />
    </form>
  );
};


// З глобального стейта в пропи компонента HookForm
const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  isLoading: contactsSelectors.getLoading(state),
});

// Операції в пропи компонента HookForm
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HookForm);



HookForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


