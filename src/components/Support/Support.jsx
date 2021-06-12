import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


function Support () {

    const handleNext = () => {

        history.push('/comments')
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <input type="number" placeholder="number" id="number" required></input>
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Support;