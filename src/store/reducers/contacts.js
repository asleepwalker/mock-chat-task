import { FETCH_CONTACTS, SELECT_CONTACT } from '../actions/contacts';
import { mockContacts } from '../../mockData';

const initialState = {
  list: [],
  current: 0,
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS: return { ...state, list: mockContacts };
    case SELECT_CONTACT: return { ...state, current: action.payload };
    default: return state;
  }
};
