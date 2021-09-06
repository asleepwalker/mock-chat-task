import { combineReducers, createStore } from 'redux';
import { contactsReducer, messagesReducer } from './reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  messages: messagesReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
