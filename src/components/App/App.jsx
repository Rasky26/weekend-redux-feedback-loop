// Import the core libraries
import axios from 'axios';
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom'

// Import the needed components
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Success from '../Success/Success';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

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

        {/* `<Comments />` route */}
        <Route path="/comments" exact>
          <Comments />
        </Route>

        {/* `<Feeling />` route */}
        <Route path="/feeling" exact>
          <Feeling />
        </Route>
                       
        {/* `<Support />` route */}
        <Route path="/review" exact>
          <ReviewFeedback />
        </Route> 
               
        {/* `<Success />` route */}
        <Route path="/success" exact>
          <Success />
        </Route>

        {/* `<Support />` route */}
        <Route path="/support" exact>
          <Support />
        </Route>

        {/* `<Understanding />` route */}
        <Route path="/understanding" exact>
          <Understanding />
        </Route>

      </Router>
    </div>
  );
}

export default App;
