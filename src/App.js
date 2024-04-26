import React, { useState } from 'react';
import './App.css';
import ActorList from './components/actor/ActorList';
import ActorDetail from './components/actor/ActorDetail';
import useFetch from './hooks/useFetch';
import Home from './pages/Home';

function App() {
  const [selectedActor, setSelectedActor] = useState(null);
  const { data: actors, loading, error } = useFetch('people');

  const handleDetailClick = (actor) => {
    setSelectedActor(actor);
  };

  return (

    <div className="App">
          <Home/>

      <h1>Star Wars Actors</h1>
      {/* Display loading spinner */}
      {loading && <div className="loading-spinner"></div>}
      {/* Display user-friendly error message */}
      {error && <p className="error-message">Oops! Something went wrong. Please try again later.</p>}
      <ActorList actors={actors} onDetailClick={handleDetailClick} />
      {selectedActor && <ActorDetail actor={selectedActor} />}
    </div>
  );
}

export default App;
