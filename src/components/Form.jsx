import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendMessage } from '../store/actions/messages';
import { getCurrentContact } from '../store/selectors/contacts';

function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const id = useSelector(getCurrentContact);

  const handleChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const handleReset = useCallback(() => {
    setText('');
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(sendMessage(id, text));
    handleReset();
  }, [dispatch, id, text, handleReset]);

  useEffect(handleReset, [id, handleReset]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} placeholder="Type your message..." />
      <button type="submit" disabled={!text}>Send</button>
    </form>
  );
}

export default Form;
