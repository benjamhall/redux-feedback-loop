import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Support from "../Support/Support";
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Understanding () {

    const [info, setInfo] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {
            console.log('dispatching', info);
            dispatch({
                type: 'UNDERSTANDING',
                payload: info
            })
        history.push('/support')
    }

    return (
        <div>
            <p>How well are you understanding the content?</p>
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

export default Understanding;
