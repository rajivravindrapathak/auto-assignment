import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { fetchUserDetails } from '../../services/githubService';

const UserSearch = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const user = await fetchUserDetails(username);
      dispatch(setUser(user));
      onSearch(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserSearch;
