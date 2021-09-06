const getStore = (store) => store.messages;
export const getMessages = (id) => (store) => getStore(store)[id] || [];
