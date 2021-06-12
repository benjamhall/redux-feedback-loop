import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Understanding from "../Understanding/Understanding";
import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feeling () {

    const [info, setInfo] = useState('')
    
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {
            console.log('dispatching', info);
            dispatch({
                type: 'FEELING',
                payload: info
            })

        history.push('/understanding')
    }

    return (
       
        <div>
            <p>How are you feeling today?</p>
            <select onChange={(event) => setInfo(event.target.value)}>
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

export default Feeling;