import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Understanding from "../Understanding/Understanding";

function Feeling () {

    const handleNext = () => {

        history.push('/understanding')
    }

    return (
       
        <div>
            <p>How are you feeling today?</p>
            <input type="number" placeholder="number" id="number" required></input>
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Feeling;