import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Route, HashRouter as Router, Link, useHistory, } from "react-router-dom";
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";

function App() {
  const history = useHistory();

  //When the Start Survey button is clicked then this function sends the user to the 'feeling' page 
  const handleStart = () => {
    console.log('clicked start survey')
    history.push('/feeling')
  }

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <div>
        <p>Thank you for arriving, please take a minute and complete our survey!</p>
        <Button variant="outlined" color="primary" onClick={handleStart}>Start Survey</Button>
      </div>
      <br />
      {/* <nav>
      <Link to='/feeling'></Link>
        </nav> */}
      <Route path='/feeling'><Feeling /></Route>
      <Route path='/understanding' />
      <Route path='/support' />
      <Route path='/comments' />
      <Route path='/review' />
      <Route path='/success' />
    </div>
    </Router>
  );
}

export default App;
