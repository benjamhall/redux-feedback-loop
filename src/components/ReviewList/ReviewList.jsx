import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


function ReviewList() {
    const history = useHistory();

    const handleSubmit = () => {

        axios.post('/feedback', store.feedbackReducer)
            .then((response) => {
                console.log(response)


            }).catch((error) => {
                console.log(error);
            })

        history.push('/success')
    }

    return (
        <div>
            <h1>Review Your Feedback:</h1>
            <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default ReviewList;