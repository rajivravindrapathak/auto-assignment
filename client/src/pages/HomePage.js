import React from 'react';
import UserSearch from '../components/UserSearch/UserSearch';

const HomePage = ({ onSearch }) => (
  <div>
    <h1>GitHub User Explorer</h1>
    <UserSearch onSearch={onSearch} />
  </div>
);

export default HomePage;
