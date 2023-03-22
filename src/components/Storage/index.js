import authReducer from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: persistedAuthReducer,
    middleware: [thunk],
});
export const persistor = persistStore(store);
