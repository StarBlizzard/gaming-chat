import { createSlice, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { Message, Chat } from './types';
import { getChat } from './thunks';

interface ChatState {
  chatId?: number;
  messages: Message[];
  type?: string;
  oldestLoadedMessage?: Message;
  loading: boolean;
}

const ChatSlice = createSlice({
  name: 'chat',
  initialState: {
    type: '',
    messages: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChat.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChat.fulfilled, (state: ChatState, { payload: chat }) => {
        const {
          id,
          type,
          messages,
          oldestLoadedMessage,
        } = chat;

        state.loading = false;
        state.chatId = id;
        state.type = type;
        state.messages = messages;
        state.oldestLoadedMessage = oldestLoadedMessage;
      });
  }
});
