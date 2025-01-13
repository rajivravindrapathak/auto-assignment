import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import RepositoriesPage from './pages/RepositoriesPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleSearch = () => setCurrentPage('repos');

  return (
    <div>
      {currentPage === 'home' && <HomePage onSearch={handleSearch} />}
      {currentPage === 'repos' && <RepositoriesPage />}
    </div>
  );
};

export default App;





// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
