import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Support from "../Support/Support";
import { useHistory } from "react-router-dom";

function Understanding () {
    const history = useHistory();

    const handleNext = () => {

        history.push('/support')
    }

    return (
        <div>
            <p>How well are you understanding the content?</p>
            <input type="number" placeholder="number" id="number" required></input>
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Understanding;
