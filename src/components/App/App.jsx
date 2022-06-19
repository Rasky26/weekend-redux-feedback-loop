// Import the core libraries
import axios from 'axios';
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom'

// Import the needed components
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';

// Import the stylesheet
import './App.css';

function App() {

  return (
    <div className='App'>
      <Router>

        {/* Show the header on all page */}
        <Header />

        {/* `<Home />` route */}
        <Route path="/" exact>
          <HomePage />
        </Route>

        {/* `<Feeling />` route */}
        <Route path="/feeling" exact>
          <Feeling />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
