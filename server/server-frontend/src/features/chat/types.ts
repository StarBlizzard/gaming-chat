import { createSlice, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { User, ApiUser } from '../auth/types';

export interface ApiMessage {
  id: number;
  content: string;
  senderUserId: number;
  date: string;
}

export interface ApiChat {
  id: number;
  type: string;
  participants: ApiUser[];
  messages: ApiMessage[],
}

export interface ApiResponse {
  data: {
    chat: ApiChat;
  }
}

export interface Message {
  id: number;
  content: string;
  senderUserId: number;
  date: Date;
}

export interface Chat {
  id: number;
  type: string;
  messages: Message[];
  oldestLoadedMessage: Message;
}
