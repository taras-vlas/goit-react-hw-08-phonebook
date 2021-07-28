import { createAction } from '@reduxjs/toolkit';

// Create Action для отримання списку контактів
const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');
const fetchContactsError =   createAction('phonebook/fetchContactsError');
// Create Action для додавання контактів
const addContactRequest = createAction('phonebook/addContactRequest');
const addContactSuccess = createAction('phonebook/addContactSuccess');
const addContactError =   createAction('phonebook/addContactError');
// Create Action для видалення контактів
const deleteContactRequest = createAction('phonebook/deleteContactRequest',);
const deleteContactSuccess = createAction('phonebook/deleteContactSuccess',);
const deleteContactError =   createAction('phonebook/deleteContactError',);
// Create Action для фільтра
const changeFilter = createAction('phonebook/changeFilter');
//export const changeFilter = createAction('phonebook/changeFilter');


          // eslint-disable-next-line
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,
  
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  
  changeFilter
};


