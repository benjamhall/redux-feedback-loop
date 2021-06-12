import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


function ReviewList() {

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
            <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default ReviewList;