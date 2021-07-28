import { combineReducers } from '@reduxjs/toolkit'; // Імпорт функції combineReducers   combine reducers
import { createReducer } from '@reduxjs/toolkit'; // Імпорт функції createReducer створення редюсера
import actions from './contacts-actions'; // Імпорт actions в редюсери  з contacts-actions


// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
//   { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
//   { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
//   { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
// ];


// Створення редюсера для масива items в контактах (фетч усіх контактів, додавння і видалення контакта)
const items = createReducer([], {
// const contacts = createReducer(initialContacts, {
  [actions.fetchContactsSuccess]: (_, { payload }) =>
    payload.sort((a, b) => a.name.localeCompare(b.name)),
  [actions.addContactSuccess]: (state, { payload }) => [payload, ...state],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// Створення редюсера для фільтра в контактах
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// Створення редюсера індикації загрузки
const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,

  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,

  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});


// Створення редюсера обробки помилок
const error = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.deleteContactError]: (_, { payload }) => payload,

  [actions.fetchContactsRequest]: () => null,
  [actions.fetchContactsSuccess]: () => null,

  [actions.addContactRequest]: () => null,
  [actions.addContactSuccess]: () => null,

  [actions.deleteContactRequest]: () => null,
  [actions.deleteContactSuccess]: () => null,
});

// Експорт усіх редюсерів через комбайн
export default combineReducers({
  items,
  filter,
  loading,
  error
});
