import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Route, HashRouter as Router, Link } from "react-router-dom";


//This function involves has a button which on click directs the user to begin the survey
function Start() {
    const history = useHistory();

    //When the Start Survey button is clicked then this function sends the user to the 'feeling' page 
    const handleStart = () => {
        console.log('clicked start survey')
        //Routes the user to the feeling page
        history.push('/feeling')
    }

    return (
            <div>
                <p>Thank you for arriving, please take a minute and complete our survey!</p>
                <Button variant="outlined" color="primary" onClick={handleStart}>Start Survey</Button>
            </div>    
    );

}

export default Start;