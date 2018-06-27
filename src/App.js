import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';


import './App.css';

import Start from './components/Start/Start.js';
import Theory from './components/Theory/Theory.js';
import End from './components/End/End.js';

class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Start}/>
                <Route path="/theory" component={Theory}/>
                <Route path="/end" component={End}/>
            </Switch>
        </BrowserRouter>
    }
}

export default App;