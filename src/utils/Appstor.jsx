import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import persistedReducer from "./CartSlice"; 
import { persistStore } from 'redux-persist';

const Appstore = configureStore({
  reducer: {
    user: UserSlice,
    cart: persistedReducer, 
  },
});

const persistedStore = persistStore(Appstore);

export { Appstore, persistedStore };
