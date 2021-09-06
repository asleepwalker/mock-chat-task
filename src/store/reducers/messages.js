import { FETCH_MESSAGES, SEND_MESSAGE } from '../actions/messages';
import { createMockMessage, mockHistory } from '../../mockData';

export const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MESSAGES: {
      const id = action.payload;
      if (!state[id]) return { ...state, [id]: mockHistory(id) };
      return state;
    }
    case SEND_MESSAGE: {
      const { id, text } = action.payload;
      const history = state[id] || [];
      return { ...state, [id]: [...history, createMockMessage(text, true)] };
    }
    default: return state;
  }
};
