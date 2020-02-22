import React from 'react';
import './App.css';
import PlayerData from './components/PlayerData';
import useLocalStorage from './components/useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', '')


  return (
    <div className="App">
      <div>
        <input 
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange= {e => setName(e.target.value)}
          />
      </div>
      <PlayerData />
    </div>
  );
}

export default App;
