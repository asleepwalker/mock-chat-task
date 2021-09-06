export const FETCH_CONTACTS = 'contacts/fetchList';
export const SELECT_CONTACT = 'contacts/select';

export const fetchContacts = () => ({ type: FETCH_CONTACTS });
export const selectContact = (id) => ({ type: SELECT_CONTACT, payload: id });
