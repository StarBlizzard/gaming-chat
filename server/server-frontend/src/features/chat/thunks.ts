import { createAsyncThunk } from '@reduxjs/toolkit';
import { Chat, ApiResponse, ApiChat, ApiMessage, Message } from './types';

const mockData: ApiResponse = {
  data: {
    chat: {
      id: 1,
      type: 'direct',
      participants: [{
        id: 1,
        name: 'User A',
        email: 'a@a.a',
      }, {
        id: 2,
        name: 'User B',
        email: 'a@a.a',
      }],
      messages: [{
        id: 1,
        content: 'Hey',
        senderUserId: 1,
        date: '1970-01-01T00:00:00.000Z',
      }, {
        id: 2,
        content: 'World',
        senderUserId: 2,
        date: '1970-01-01T00:00:00.001Z',
      }],
    },
  },
};

const getChatData = (chatId: number): Promise<ApiResponse> => Promise.resolve(mockData);

const mapMessages = (messages: ApiMessage[]): Message[] => messages.map(({
  id,
  date,
  content,
  senderUserId,
}) => ({
  id,
  content,
  senderUserId,
  date: new Date(date),
}));

const mapChat = ({
  id,
  type,
  messages,
}: ApiChat): Chat => {
  const mappedMessages = mapMessages(messages);

  return {
    id,
    type,
    messages: mappedMessages,
    oldestLoadedMessage: mappedMessages[0],
  };
};

export const getChat = createAsyncThunk('chat/getChat', 
  async (chatId: number) => {
    const {
      data: {
        chat
      }
    } = await getChatData(chatId);

    return mapChat(chat);
  },
);
