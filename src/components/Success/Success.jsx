import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


function Success() {
    const history = useHistory();

    const handleStart = () => {

        history.push('/start')
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleStart}>Start Survey</Button>
        </div>
    );
}

export default Success;