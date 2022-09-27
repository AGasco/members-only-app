import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const initialState = {
  email: '',
  password: ''
};

export const SignInPage = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [error, setError] = useState('');
  const history = useHistory();

  const { email, password } = inputValue;

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onClickSignIn = async () => {
    try {
      setError('');
      await signInWithEmailAndPassword(getAuth(), email, password);
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="hull-height-page">
      <div className="centered-container space-before">
        {error ? (
          <div>
            <p className="error-message">{error}</p>
          </div>
        ) : null}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="full-width space-after"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="full-width space-after"
          value={password}
          onChange={onChange}
        />
        <button className="full-width" onClick={onClickSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};
