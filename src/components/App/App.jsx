import React from 'react';
import axios from 'axios';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <body>
        <p>Thank you for arriving, please take a minute and complete our survey!</p>
        <Button variant="outlined" color="primary">Start Survey</Button>
      </body>
    </div>
    
  );
}

export default App;
