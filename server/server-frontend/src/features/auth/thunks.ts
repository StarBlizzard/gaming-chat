import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, ApiUser, ApiResponse, Credentials } from './types';

const mockData: ApiResponse = {
  data: {
    token: 'abc',
    user: {
      id: 1,
      name: 'User A',
      email: 'a@a.a',
    },
  },
};

const apiLogout = (): Promise<void> => Promise.resolve();
const apiLogin = (email: string, password: string): Promise<ApiResponse> => Promise.resolve(mockData);

const mapUser = ({
  id,
  name,
  email,
}: ApiUser): User => ({
  id,
  name,
  email,
  mainCharacter: email[0].toUpperCase(),
});

export const login = createAsyncThunk('auth/login', 
  async ({ email, password }: Credentials): Promise<{ user: User, token: string }> => {
    const {
      data: {
        token,
        user,
      }
    } = await apiLogin(email, password);


    return {
      token,
      user: mapUser(user),
    };
  },
);

export const logout = createAsyncThunk('auth/logout', 
  async (): Promise<User> => {
    await logout();

    return {};
  },
);
