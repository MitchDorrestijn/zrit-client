import React, { Component } from 'react';
import LoginPage from './container/LoginPage';
import TablePage from './container/TablePage';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<LoginPage/>*/}
                <TablePage />
            </div>
        );
    }
}
