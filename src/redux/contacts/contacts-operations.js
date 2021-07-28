import axios from 'axios';
import { toast } from 'react-toastify';

import actions from './contacts-actions'; // Імпорт  аctions в операції  з  контактів-аctions


//axios.defaults.baseURL = 'http://localhost:4040';


/** Асинхронна операція Отримання списка контактів: запит, dispatch actions отримання */
const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
    toast.error(error.message);
  }
};
/** Асинхронна операція Додавання контакта: пройом даних з форми, запит, dispatch actions додавання */
const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    toast.success('Added');
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
    toast.error(error.message);
  }
};
/** Асинхронна операція Видалення контакта: пройом id, запит, dispatch actions видалення */
const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    toast.success('Deleted');
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
    toast.error(error.message);
  }
};

// eslint-disable-next-line
export default {
  fetchContacts,
  addContact,
  deleteContact
};
