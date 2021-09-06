import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Contact from './Contact';

import { fetchContacts } from '../store/actions/contacts';
import { getContactList, getCurrentContact } from '../store/selectors/contacts';

function Contacts() {
  const dispatch = useDispatch();
  const list = useSelector(getContactList);
  const current = useSelector(getCurrentContact);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className="contacts">
      <div className="header">Your contacts:</div>
      {list.map((item) => (
        <Contact
          id={item.id}
          name={item.name}
          avatar={item.avatar}
          active={item.id === current}
          key={item.id}
        >
          {item.name}
        </Contact>
      ))}
    </div>
  );
}

export default Contacts;
