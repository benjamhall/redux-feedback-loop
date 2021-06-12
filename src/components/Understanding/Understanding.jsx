import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Support from "../Support/Support";

function Understanding () {

    const handleNext = () => {

        history.push('/support')
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <input type="number" placeholder="number" id="number" required></input>
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Understanding;
