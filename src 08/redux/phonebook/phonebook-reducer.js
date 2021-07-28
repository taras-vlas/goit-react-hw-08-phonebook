import { combineReducers } from "redux";

const initialState = {
  isLoading: false,
  error: "",
  contacts: {
    items: [
        //{ id: null, name: "", number: null },
        { id: "id-1", name: "Rosie Simpson", number: "+38-044-459-1256" },
        { id: "id-2", name: "Hermione Kline", number: "+38-041-443-8912" },
        { id: "id-3", name: "Eden Clements", number: "+38-048-645-1779" },
        { id: "id-4", name: "Annie Copeland", number: "+38-042-227-9126" },
    ],
    filter: "",
  },
};

const isLoading = (state = initialState.isLoading, action) => {
  const { type } = action;

  switch (type) {
    case "phonebook/fetchContactRequest":    //case "phonebook/fetchContactRequest":    
    case "phonebook/addContactRequest":
    case "phonebook/deleteContactRequest":
      return true;
    
    case "phonebook/fetchContactsSuccess":
    case "phonebook/fetchContactsError":
    case "phonebook/addContactSuccess":
    case "phonebook/addContactError":
    case "phonebook/deleteContactSuccess":
    case "phonebook/deleteContactError":
      return false;
    
    default:
      return state;
  }
};

const error = (state = initialState.isLoading, action) => {
  const { type, payload } = action;

  switch (type) {
    case "phonebook/fetchContactsError":
    case "phonebook/addContactError":
    case "phonebook/deleteContactError":
      return payload;
    default:
      return state;
  }
};

const items = (state = initialState.contacts.items, action) => {
  const { type, payload } = action;
  switch (type) {
    case "phonebook/fetchContactsSuccess":
      return payload;
    case "phonebook/addContactSuccess":
      return [...state, payload];

    case "phonebook/deleteContactSuccess":
      return [...state.filter(({ id }) => payload !== id)];
    default:
      return state;
  }
};

const filter = (state = initialState.contacts.filter, action ) => {
  const { payload } = action;
  switch (action.type) {
    case "phonebook/ChangeFilter":
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ items, filter, isLoading, error });




