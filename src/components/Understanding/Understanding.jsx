import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Support from "../Support/Support";
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useState} from 'react';

//This function handles the understanding section of the survey
function Understanding () {

    const [info, setInfo] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {

        // input validation to make sure that the user selects a value
        if (info === '') {
            console.log('value selected')
            alert('Please select a value for how you are feeling.');
            return false;
        }
        // Dispatching the information to the reducer
            console.log('dispatching', info);
            dispatch({
                type: 'UNDERSTANDING',
                payload: info
            })
        // directs the user to the support page
        history.push('/support')
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <select onChange={(event) => setInfo(event.target.value)}>
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {/* <input type="number" placeholder="number" id="number" required></input> */}
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Understanding;
