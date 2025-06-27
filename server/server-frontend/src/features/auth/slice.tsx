import { createSlice } from '@reduxjs/toolkit';
import { User } from './types';
import { login, logout } from './thunks';

interface AuthState {
  user?: User;
  token?: string;
  loading: boolean;
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state: AuthState, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state: AuthState, action) => {
        state.user = {};
        state.token = '';
        state.loading = false;
      });
  }
});
