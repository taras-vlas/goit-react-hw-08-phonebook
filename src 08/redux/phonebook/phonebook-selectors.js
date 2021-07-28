import { createSelector } from "@reduxjs/toolkit";

export const getAllContacts = (state) => state.phonebook.items;
export const getFilter = (state) => state.phonebook.filter;
export const getIsLoading = (state) => state.phonebook.isLoading;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(toLowerCaseFilter)
    );
  }
);

export const getContactID = (contactID) => (state) =>
  state.phonebook.items.find((item) => item.id === contactID);

            // eslint-disable-next-line
// export default {
//   getAllContacts,     ///// getContacts,
//   getFilter,
//   getIsLoading,
//   //getError,
//   getVisibleContacts,
//   getContactID       ///// getContact
// };


