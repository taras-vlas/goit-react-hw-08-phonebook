import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';  //styles from 
//import styled from 'styled-components'

import ContactListItem from './ContactListItem';


const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.TodoList}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}       //{contact.id}
          name={name}
          number={number}
          //contact={contact}
          onDelete={() => onDelete(id)}
        />
        // <li key={id} className={styles.list}>
        //   <div className={styles.buttonContainer}>
        //     <button className={styles.delete} onClick={() => onDelete(id)}>
        //       -
        //     </button>
        //   </div>
        //   <div>
        //     <p className={styles.name}>{name} </p>
        //     <span className={styles.number}>{number}</span>
        //   </div>
        // </li>
      ))}
    </ul>
  );
};
// const List = styled.ul`
//   width: 500px;
// `;


const mapStateToProps = state => ({
  contacts: contactsSelectors.getfilteredContacts(state),   //getInputContacts(state), getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);



// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDelete: PropTypes.func.isRequired,
// };







