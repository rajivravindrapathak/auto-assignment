import React from 'react';
import { useSelector } from 'react-redux';

const FollowersList = ({ onSelectFollower }) => {
  const followers = useSelector((state) => state.user.followers);

  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id} onClick={() => onSelectFollower(follower.login)}>
            {follower.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
