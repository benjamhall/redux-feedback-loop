import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const feedbackReducer = (state = [], action) => {
    
    switch(action.type){
        case 'FEELING':
        return [...state, action.payload]
        case 'UNDERSTANDING' :
        return[...state, action.payload]
        case 'SUPPORT' :
        return[...state, action.payload]
        case 'COMMENTS' :
        return[...state, action.payload]

        

        default:
        return state; 
    }
    
}



const store = createStore(
    combineReducers({
      feedbackReducer,
    }),
    applyMiddleware(logger),
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
