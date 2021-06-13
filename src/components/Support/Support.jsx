import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useState} from 'react';


// This function handles the Support section of the survey and requires a value to be selected
function Support () {
    const [info, setInfo] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {
        // Input validation alerting the user they must select a value
        if (info === '') {
            console.log('value selected')
            alert('Please select a value for how you are feeling.');
            return false;
        }
        // Dispatching the information to the reducer
        console.log('dispatching', info);
        dispatch({
            type: 'SUPPORT',
            payload: info
        })

        history.push('/comments')
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <select onChange={(event) => setInfo(event.target.value)}>
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Support;