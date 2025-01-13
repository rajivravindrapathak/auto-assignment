import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`/api/users/${username}`);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUserData}>Search</button>

      {userData && (
        <div>
          <h1>{userData.name}</h1>
          <img src={userData.avatar_url} alt="Avatar" />
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
}

export default App;




// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
