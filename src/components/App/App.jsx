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

//This function handles the initial setup of the Routes of the survey
function App() {
  const history = useHistory();

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <br />
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
