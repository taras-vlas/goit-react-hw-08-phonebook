import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";

import { authOperations } from '../../redux/auth';
import styles from '../HookForm/HookForm.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};

// Компонент форми реєстрації
const RegistrationForm = ({ onRegister }) => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const handleChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    onRegister(state); // Визов операції реєстрації і передача даних зі стейта

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <label className={styles.label}>
        <span className={styles.text}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Input for your name"
          className={styles.input}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label> */}

        < div className={styles.HeaderWrapper}>
          {/* <h3>Find contacts by name</h3> */}
          <TextField
            label = "Your name"       // Фільтрувати:  placeholder="Contact name"
            onChange={handleChange}  //{() => handleChange({})}
            value={name}                   //{this.state.name}
            // className={styles.input}
            type="text"
            name="name"
            placeholder="Should be your Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            //disabled={isLoading}
            required
          />
        </div>

      {/* <label className={styles.label}>
        <span className={styles.text}>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={styles.input}
          placeholder="Your e-mail"
          aria-label="Input for your Email"
          required
        />
      </label> */}

       < div className={styles.HeaderWrapper}>
          {/* <h3>Find contacts by name</h3> */}
          <TextField
            label = "Email"       // Фільтрувати:  placeholder="Contact name"
            onChange={() => handleChange({})}  //{() => handleChange({})}
            value={email}                   //{this.state.name}
            // className={styles.input}
            type="email"
            name="email"
            aria-label="Input for your Email"
            placeholder="Should be your Email"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            //disabled={isLoading}
            required
          />
        </div>

      {/* <label className={styles.label}>
        <span className={styles.text}>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Should be at least 7 characters"
          aria-label="Input for your password"
          required
        />
      </label> */}

      < div className={styles.HeaderWrapper}>
          {/* <h3>Find contacts by name</h3> */}
          <TextField
            label = "Password"       // Фільтрувати:  placeholder="Contact name"
            onChange={handleChange}  //{() => handleChange({})}
            value={password}                   //{this.state.name}
            // className={styles.input}
            type="password"
            name="password"
            aria-label="Input for your password"
            placeholder="Should be at least 7 characters"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            //disabled={isLoading}
            required
          />
        </div>

      <div className={styles.container}>
        <button type="submit" className={styles.button}>
          Create account
        </button>
      </div>

    </form>
  );
};


const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);



RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};