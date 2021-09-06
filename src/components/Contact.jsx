import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { selectContact } from '../store/actions/contacts';

function Contact({ id, name, avatar, active }) {
  const dispatch = useDispatch();

  const handleSelect = useCallback(() => {
    if (!active) dispatch(selectContact(id));
  }, [dispatch, id, active]);

  return (
    <div className={cn('item', { active })} onClick={handleSelect}>
      <div className="image">{avatar}</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default Contact;
