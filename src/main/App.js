import React, { Component } from 'react';
import LoginPage from './container/LoginPage';
import TablePage from './container/TablePage';
import AddPage from './container/AddPage';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<LoginPage/>*/}
                {/* <TablePage /> */}
                <AddPage />
            </div>
        );
    }
}
