export const FETCH_MESSAGES = 'messages/fetchList';
export const SEND_MESSAGE = 'messages/send';

export const fetchMessages = (id) => ({ type: FETCH_MESSAGES, payload: id });
export const sendMessage = (id, text) => ({ type: SEND_MESSAGE, payload: { id, text } });
