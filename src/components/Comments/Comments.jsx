import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useState} from 'react';


function Comments() {

    const [info, setInfo] = useState('');
   

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {
        console.log('dispatching', info);
        dispatch({
            type: 'COMMENTS',
            payload: info
        })
        history.push('/review')
    }

    return (
        <div>
            <p>Any comments you want to leave?</p>
            <input type="text" id="text" required onChange={(event) => setInfo(event.target.value)}></input>
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Comments;