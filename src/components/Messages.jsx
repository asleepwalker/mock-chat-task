import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { fetchMessages } from '../store/actions/messages';
import { getCurrentContact } from '../store/selectors/contacts';
import { getMessages } from '../store/selectors/messages';

function Messages() {
  const ref = useRef();
  const dispatch = useDispatch();
  const id = useSelector(getCurrentContact);
  const list = useSelector(getMessages(id));

  useEffect(() => dispatch(fetchMessages(id)), [dispatch, id]);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [ref, list]);

  return (
    <div className="body" ref={ref}>
      {list.map((item, index) => (
        <div className={cn('item', { mine: item.mine })} key={index}>
          <div className="text">{item.text}</div>
          <div className="time">{item.time.toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
  );
}

export default Messages;
