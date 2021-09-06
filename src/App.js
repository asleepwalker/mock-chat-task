import { Provider } from 'react-redux';

import store from './store';
import Contacts from './components/Contacts';
import Messages from './components/Messages';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Contacts />
        <div className="messenger">
          <Messages />
          <Form />
        </div>
      </div>
    </Provider>
  );
}

export default App;
