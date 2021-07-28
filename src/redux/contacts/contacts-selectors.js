import { createSelector } from '@reduxjs/toolkit'; // Імпорт функції Selector для мемоізації селектора з toolkit 

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;
  console.log('getContacts', getContacts);
const getError = state => state.contacts.error;

// Мемоізація функції фільтра контактів на базі композитного селектора
const getfilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// Композитний селектор для фільтра контактів (варіант без мемоізації)
// export const getfilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// eslint-disable-next-line
export default {  
  getLoading,
  getFilter,
  getContacts,
  getError,
  getfilteredContacts,
};
