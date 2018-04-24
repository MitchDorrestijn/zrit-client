import React, { Component } from 'react';
import Main from './container/Main';
import Login from './container/LoginPage';
import './css/App.css';

export default class App extends Component {

    render() {
        return (
            <div className="App">
                {/*<Main />*/}
                <Login/>
            </div>
        );
    }
}
