import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from "./store/FirebaseContext"
import { FirebaseContext } from './store/FirebaseContext';
import { Firebase } from './store/FirebaseConfig';

ReactDOM.render(
    <FirebaseContext.Provider value={Firebase}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>,
document.getElementById('root'));
