import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


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

const feedbackList = (state = [], action) => {
    switch(action.type){
        case 'GET_FEEDBACK' :
        return action.payload

        default :
        return state; 
    }
}


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
