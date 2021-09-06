const getStore = (store) => store.contacts;
export const getContactList = (store) => getStore(store).list;
export const getCurrentContact = (store) => getStore(store).current;
