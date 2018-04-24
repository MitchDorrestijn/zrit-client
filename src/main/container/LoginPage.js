import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import LoginImg from '../components/LoginImg';
import LoginForm from "../components/LoginForm";

import 'bootstrap/dist/css/bootstrap.css';
import '../css/login.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <LoginImg/>
                    </Col>

                    <Col md={6}>
                        <LoginForm/>
                    </Col>
                </Row>
            </Container>
        );
    }
}