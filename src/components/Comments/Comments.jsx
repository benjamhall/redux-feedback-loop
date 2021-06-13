import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';


function Comments() {

    const [info, setInfo] = useState('');
    const comments = useSelector((store) => store.feedbackReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNext = () => {
        console.log('dispatching', info);
        dispatch({
            type: 'COMMENTS',
            payload: info
        })

        axios.post('/feedback', comments)
            .then((response) => {
                console.log(response)
                getResponses();
            }).catch((error) => {
                console.log(error);
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