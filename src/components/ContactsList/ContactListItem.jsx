import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import styles from "./ContactList.module.css";   // styles from   *.module.css

const ContactListItem = ({ name, number, onDelete }) => {   //({ contact, onDelete })
  
  return (
    <li className={styles.List__item}>
      {/* {"• " + name + ":   " + number} 
      <button className={styles.List_button}
              type="button"
              name="delete"
              onClick={onDelete}
      >
          Delete
      </button> */}
      {"•   " + name + ":    " + number + "    " }
      {/* <span className={styles.name}>{name}</span>
      <a href={`tel:${number}`} className={styles.number}>
      {contact.number}
      </a> */}
      <button className={styles.List__button}
              type="button"
              name="delete"
              onClick={() => onDelete()}
      >                      
        Delete
        <DeleteIcon width="20px" height="20px" fill="#a7a1a1" />
      </button>
    </li>
  )
}

export default  ContactListItem;


// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired
// };

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};
