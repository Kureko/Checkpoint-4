import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Gallery from './components/gallery/Gallery';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/galleries" component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
