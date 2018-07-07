import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBuK0IBQhcLn6tPq3Naq2M1v5jfsw7KfTM",
    authDomain: "mayan-numeral-system.firebaseapp.com",
    databaseURL: "https://mayan-numeral-system.firebaseio.com",
    projectId: "mayan-numeral-system",
    storageBucket: "",
    messagingSenderId: "631399888220"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
