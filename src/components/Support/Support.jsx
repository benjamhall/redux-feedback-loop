import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


function Support () {
    const history = useHistory();

    const handleNext = () => {

        history.push('/comments')
    }

    return (
        <div>
            <p>How well are you being supported?</p>
            <input type="number" placeholder="number" id="number" required></input>
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Support;