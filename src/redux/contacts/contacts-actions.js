import { createAction } from '@reduxjs/toolkit'; // Імпорт функції create аction  з   toolkit

// create аctions для отримання списка контактів
export const fetchContactsRequest = createAction('contacts/fetchContactsRequest',);
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess',);
export const fetchContactsError = createAction('contacts/fetchContactsError');

// create аctions для отримання додавання контактів
const addContactRequest = createAction('contacts/addContactsRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

// create аctions для отримання видалення контактів
const deleteContactRequest = createAction('contacts/deleteContactsRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

// create аctions для фільтра
const changeFilter = createAction('contacts/change-filter');

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

  changeFilter,
};
