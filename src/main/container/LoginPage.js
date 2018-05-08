/**
 * React related imports
 */
import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

/**
 * Self made components imports
 */
import LoginImg from '../components/LoginImg';
import LoginForm from "../components/LoginForm";

/**
 * Style related imports
 */
import 'bootstrap/dist/css/bootstrap.css';
import '../css/login.css';

/**
 * This component renders login page
 */
const LoginPage = () => {
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

export default LoginPage;
