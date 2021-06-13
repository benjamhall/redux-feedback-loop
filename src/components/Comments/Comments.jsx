import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useState} from 'react';

// This function involves working with the comments section and this section can be left blank
function Comments() {

    const [info, setInfo] = useState('');


    const history = useHistory();
    const dispatch = useDispatch();

    // HandleNext is called upon clicking the Next button sending the information to the reducer
    const handleNext = () => {
        console.log('dispatching', info);
        // Dispatching the information to the reducer
        dispatch({
            type: 'COMMENTS',
            payload: info
        })
        
        //routes the user to the review list page
        history.push('/review')
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <input type="text" id="text" required onChange={(event) => setInfo(event.target.value)}></input>
            <Button variant="outlined" color="primary" onClick={handleNext}>Next</Button>
        </div>
    );
}

export default Comments;