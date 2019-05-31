import React from 'react';
import './App.css';

import Countdown from './components/Countdown';
import RandomWord from './components/RandomWord';

function App() {
  return (
    <div className="root">
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <RandomWord />
      <Countdown timeTillDate="06 06 2019, 00:00 am" timeFormat="MM DD YYYY, h:mm a" />
    </div>
  );
}

export default App;
