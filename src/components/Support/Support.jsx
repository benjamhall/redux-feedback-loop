import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useState} from 'react';



function Support () {
    const [info, setInfo] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {
        console.log('dispatching', info);
        dispatch({
            type: 'SUPPORT',
            payload: info
        })

        history.push('/comments')
    }

    return (
        <div>
            <p>How well are you being supported?</p>
            <select onChange={(event) => setInfo(event.target.value)}>
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