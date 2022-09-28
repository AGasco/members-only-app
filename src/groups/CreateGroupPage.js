import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postWithCredentials } from '../data';

export const CreateGroupPage = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const createGroup = async () => {
    const response = await postWithCredentials('/groups', { name });
    const { newGroupId } = await response.json();
    history.push(`groups/${newGroupId}`);
  };

  return (
    <div className="centered-container">
      <h1>Create Group</h1>
      <input
        type="text"
        placeholder="Enter Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={createGroup}>Create Group</button>
    </div>
  );
};
