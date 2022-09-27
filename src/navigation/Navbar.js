import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export const Navbar = ({ user }) => {
  const history = useHistory();

  const onClickSignOut = async () => {
    try {
      await signOut(getAuth());
      history.push('/sign-in');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <nav>
      <Link to="/">
        <h1 className="app-heading">Members-Only App</h1>
      </Link>
      {user ? (
        <>
          <button className="sign-out-button" onClick={onClickSignOut}>
            Sign Out
          </button>
          <p className="logged-in-as space-before">Logged in as {user.email}</p>
        </>
      ) : null}
    </nav>
  );
};
