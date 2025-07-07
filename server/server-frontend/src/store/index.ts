import { AuthSlice } from 'features/auth/slice';
import { ChatSlice } from 'features/chat/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    chat: ChatSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
