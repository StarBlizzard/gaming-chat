export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  id?: number;
  email?: string;
  name?: string;
  mainCharacter?: string;
}

export interface ApiUser {
  id: number;
  email: string;
  name: string;
}

export interface ApiResponse {
  data: {
    user: ApiUser;
    token: string;
  }
}
