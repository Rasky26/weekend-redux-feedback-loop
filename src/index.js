import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Import the REDUX components to be used
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Import the `Provider` to allow REDUX state throughout the App
import { Provider } from 'react-redux';
// Use the `logger` for development
import logger from 'redux-logger';


// Set our emotion tracker reducer to simply contain a single object
const feeback = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: "",
}, action) => {


    console.log(action, state, "<>>>>>>>>>>>.")

    // Switch statements to update the `feedback` object
    switch (action.type) {

        // Use a general switch to handle updating any field
        // on the `feedback` object
        case "SET_FEEDBACK":
            return {
                // Use a spread operator to retain all STATE values
                ...state,
                // Update a specific STATE field
                [action.payload.field]: action.payload.value
            }

        // Return a default state unchanged if no case is matched
        default:
            return state
    }
}


// Create the store to hold all STATE values in REDUX
const store = createStore(
    // Combine all the reducers into a shared object.
    // This could potentially become a substantial `Big Assignment Object`.
    combineReducers({
        feeback,
    }), applyMiddleware(
        logger,
    )
)


ReactDOM.render(
    // Use the `Provider` to make the STATE accessible throughout the App
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
