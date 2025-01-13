import React from 'react';
import { useSelector } from 'react-redux';
import './RepositoryList.css';

const RepositoryList = ({ onSelectRepo }) => {
  const repos = useSelector((state) => state.repos.list);

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} onClick={() => onSelectRepo(repo)}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
