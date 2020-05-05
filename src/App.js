import React from 'react';

import './App.css';
import { Home, Rooms, Error, SingleRoom } from './pages';

function App() {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
}

export default App;
