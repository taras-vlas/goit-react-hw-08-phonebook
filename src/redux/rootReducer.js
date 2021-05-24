import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//import phoneBook from "./phoneBook/reducer";
import user from "./user";

// const phoneBookPersistConfig = {
//   key: "phoneBook",
//   storage,
//   whitelist: ["token"],
// };

//const phoneBookReducer = persistReducer(phoneBookPersistConfig, phoneBook);

const tokenPersistConfig = {
  key: "token",
  storage,
};

const userReducer = persistReducer(tokenPersistConfig, user);

export default combineReducers({
  //phoneBook: phoneBookReducer,
  user: userReducer,
});
