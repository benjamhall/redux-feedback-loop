import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// This reducer captures the information from each page of the survey
const feedbackReducer = (state = {}, action) => {
    
    switch(action.type){
    
        case 'FEELING':
        return {...state, feeling: action.payload}
        case 'UNDERSTANDING' :
        return {...state, understanding: action.payload}
        case 'SUPPORT' :
        return {...state, support: action.payload}
        case 'COMMENTS' :
        return {...state, comments: action.payload}
        case 'CLEAR_FEEDBACK' :
        return {}

    
        default:
        return state; 
    }
    
}

// This reducer gets all of the feedback so that the reviewList can append it to the DOM
const feedbackList = (state = [], action) => {
    switch(action.type){
        case 'GET_FEEDBACK' :
        return action.payload

        default :
        return state; 
    }
}

// This is where the info is stored
const store = createStore(
    combineReducers({
      feedbackReducer,
      feedbackList
    }),
    applyMiddleware(logger),
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
