import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


function ReviewList() {
    const history = useHistory();

    const info = useSelector((store) => store.feedbackReducer);
    const [surveyList, setSurveyList] = useState([])
    
    console.log('info', info);

     useEffect(() => {
        console.log('in useEffect')
        getResponses();
    }, []);

    function getResponses (){
        axios.get('/feedback')
        .then((response) => {
            console.log('get', response);
            setSurveyList(response.data)
        }).catch((error) => {
                console.log(error);
            })
    }
    
    
    const handleSubmit = () => {
        console.log('got to post feedback', info);

        axios.post('/feedback', info)
            .then((response) => {
                console.log(response)
                getResponses();
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

                {surveyList.map((response, index) =>
                    <div key={index}> 
                        <p>Feeling: {response.feeling}</p>
                        <p>Understanding: {response.understanding}</p>
                        <p>Support: {response.support}</p>
                        <p>Comments: {response.comments}</p>
                    </div>
                )}
            </div>

            <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default ReviewList;