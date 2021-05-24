import { combineReducers } from "redux";

const initialState = {
  isLoading: false,
  error: "",
  contacts: {
    items: [
      {
        id: null,
        name: "",
        number: null,
      },
    ],
    filter: "",
    // initialContacts: [
    //   { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
    //   { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
    //   { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
    //   { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
    // ],
  },
};

const isLoading = (state = initialState.isLoading, action) => {
  const { type } = action;

  switch (type) {
    case "contacts/fetchContactRequest":    //case "contacts/fetchContactRequest":    
    case "contacts/addContactRequest":
    case "contacts/deleteContactRequest":
      return true;
    
    case "contacts/fetchContactsSuccess":
    case "contacts/fetchContactsError":
    case "contacts/addContactSuccess":
    case "contacts/addContactError":
    case "contacts/deleteContactSuccess":
    case "contacts/deleteContactError":
      return false;
    
    default:
      return state;
  }
};

const error = (state = initialState.isLoading, action) => {
  const { type, payload } = action;

  switch (type) {
    case "contacts/fetchContactsError":
    case "contacts/addContactError":
    case "contacts/deleteContactError":
      return payload;
    default:
      return state;
  }
};

const items = (state = initialState.contacts.items, action) => {
  const { type, payload } = action;
  switch (type) {
    case "contacts/fetchContactsSuccess":
      return payload;
    case "contacts/addContactSuccess":
      return [...state, payload];

    case "contacts/deleteContactSuccess":
      return [...state.filter(({ id }) => payload !== id)];
    default:
      return state;
  }
};

const filter = (state = initialState.contacts.filter, action) => {
  const { payload } = action;
  switch (action.type) {
    case "contacts/ChangeFilter":
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ items, filter, isLoading, error });
