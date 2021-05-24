import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";  
import user from "./user/user-actions";

const tokenPersistConfig = {
  key: "token",
  storage,
};

const userReducer = persistReducer(tokenPersistConfig, user);

export default combineReducers({
  user: userReducer,
});
