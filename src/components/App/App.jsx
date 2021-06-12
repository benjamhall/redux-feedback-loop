import React from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import { Route, HashRouter as Router, Link} from "react-router-dom";
import Start from "../Start/Start.jsx";
import Feeling from "../Feeling/Feeling.jsx";
import Understanding from "../Understanding/Understanding.jsx";
import Support from "../Support/Support.jsx";
import Comments from "../Comments/Comments.jsx";
import ReviewList from "../ReviewList/ReviewList.jsx"
import Success from "../Success/Success.jsx"

function App() {
  const history = useHistory();

  //When the Start Survey button is clicked then this function sends the user to the 'feeling' page 
  const handleStart = () => {
    console.log('clicked start survey')
    history.push('/')
  }

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <br />
      {/* <nav>
      <Link to='/feeling'></Link>
        </nav> */}
      <Route path="/" exact><Start /></Route>
      <Route path='/feeling'><Feeling /></Route>
      <Route path='/understanding'><Understanding /></Route>
      <Route path='/support'><Support /></Route>
      <Route path='/comments'><Comments /></Route>
      <Route path='/review'><ReviewList /></Route>
      <Route path='/success'><Success /></Route>
    </div>
    </Router>
  );
}

export default App;
