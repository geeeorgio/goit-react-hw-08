import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
  },
});

export default store;
