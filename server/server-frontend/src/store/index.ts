import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { ChatSlice } from 'features/chat/slice';
import { AuthSlice } from 'features/auth/slice';

const rootReducer = combineReducers({
  auth: persistReducer(
    {
      key: 'auth',
      storage,
      whitelist: ['user', 'token'], // optional: only persist part of the state
    },
    AuthSlice.reducer
  ),
  chat: ChatSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
