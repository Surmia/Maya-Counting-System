import React from 'react';

import './Start.css';

import {
    Link
} from 'react-router-dom';


export default class Start extends React.Component {
     render() {
        return <div className="app-main">
            <div>
                <h1>System liczenia u starożytnych Majów</h1>
                <Link to="/theory" className="app-button"> Start </Link>
            </div>
        </div>
      }
    }
