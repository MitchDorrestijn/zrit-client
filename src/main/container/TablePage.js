import React, { Component } from 'react';
import Header from '../components/Header';
import { Container, Row, Col } from 'reactstrap';

import '../css/App.css';

export default class TablePage extends Component {
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
    );
  }
}
