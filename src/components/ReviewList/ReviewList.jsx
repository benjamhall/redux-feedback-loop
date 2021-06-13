import React, {useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

//This function shows the user what they entered on the survey as a review and posts the data to the database. 
function ReviewList() {
    const history = useHistory();
    const dispatch = useDispatch();

    const info = useSelector((store) => store.feedbackReducer);
    
    
    console.log('info', info);

     useEffect(() => {
        console.log('in useEffect')
        getResponses();
    }, []);

    function getResponses (){
        axios.get('/feedback')
        .then((response) => {
            console.log('get', response);
            
            dispatch({
                type: 'GET_FEEDBACK',
                payload: response.data
            })
        }).catch((error) => {
                console.log(error);
            })
    }
    
    // On submit, this function sends the info to the server and then to the database
    const handleSubmit = () => {
        console.log('got to post feedback', info);
        //POST request to the server
        axios.post('/feedback', info)
            .then((response) => {
                console.log(response)
            //Clears the feedback in the reducer because the data was sent to the database so that the reducer can handle the next user's data
                dispatch({
                    type: 'CLEAR_FEEDBACK'
                })
                
            }).catch((error) => {
                console.log(error);
            })
        // routes the user to the success page
        history.push('/success')
    }

    

    return (
        <div>
            <div>
                <h1>Review Your Feedback:</h1>
                <br />
                    <div>
                        <p>Feeling: {info.feeling}</p>
                        <p>Understanding: {info.understanding}</p>
                        <p>Support: {info.support}</p>
                        <p>Comments: {info.comments}</p>
                    </div>
            </div>

            <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default ReviewList;