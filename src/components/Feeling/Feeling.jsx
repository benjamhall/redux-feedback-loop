import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Understanding from "../Understanding/Understanding";
import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feeling () {

    const [info, setInfo] = useState('');
    
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {

        if (info === ''){
            console.log('value selected')
            alert('Please select a value for how you are feeling.');
            return false;
        }
            console.log('dispatching', info);
            dispatch({
                type: 'FEELING',
                payload: info
            })

        history.push('/understanding')
    }

    return (
       
        <div>
            <h2>How are you feeling today?</h2>
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

export default Feeling;