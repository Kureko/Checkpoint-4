import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import Gallery from './components/gallery/Gallery';
import History from './components/history/History';
import Universe from './components/universe/Universe';
import Games from './components/games/Games';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/galleries" component={Gallery} />
        <Route path="/history" component={History} />
        <Route path="/universe" component={Universe} />
        <Route path="/games" component={Games} />
      </Switch>
    </div>
  );
}

export default App;
