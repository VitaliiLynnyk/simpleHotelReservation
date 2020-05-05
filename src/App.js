import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { Home, Rooms, Error, SingleRoom } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
