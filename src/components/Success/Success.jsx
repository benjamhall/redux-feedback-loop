import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


function Success() {
    const history = useHistory();

    const handleStart = () => {

        history.push('/')
    }

    return (
        <div>
            <h2>Thank You for Completing the Survey!</h2>
            <Button variant="outlined" color="primary" onClick={handleStart}>Start Survey Again</Button>
        </div>
    );
}

export default Success;