import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


function ReviewList() {
    const history = useHistory();

    const info = useSelector((store) => store.feedbackReducer);
    
    console.log('info', info);

    const handleSubmit = () => {
        console.log('got to post feedback', dataToSend);

        axios.post('/feedback', dataToSend)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error);
            })

        history.push('/success')
    }

    return (
        <div>
            <div>
                <h1>Review Your Feedback:</h1>
                <br />
                
                <p>{info[0].feeling}</p>
                <p>{info[0].understanding}</p>
                <p>{info[0].support}</p>
                <p>{info[0].comments}</p>

            </div>

            <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default ReviewList;