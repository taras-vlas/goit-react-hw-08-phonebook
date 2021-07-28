import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';
import TextField from "@material-ui/core/TextField";
import { contactsSelectors, contactsActions } from '../../redux/contacts';

// Компонент фільтра 
const Filter = ({ value, isLoading, onChange }) => {
  
  return (
  <div className={styles.container}>
    <h2 className={styles.title}>Contacts</h2>

    {/* <label className={styles.label}>
      <span className={styles.label__text}>Searches by name</span>
      <input
        type="text"
        name="filter"
        placeholder="Find"
        className={styles.input}
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Find contacts by name"
        disabled={isLoading}
        required
      />
    </label> */}

        <div className={styles.HeaderWrapper}>
          <TextField
            value={value}        
            onChange={onChange}        
            label="Searches by name"       // Фільтрувати  
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //disabled={isLoading}
            required
          />
        </div>

  </div>
)};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
//export default Filter;


const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
  //isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
 