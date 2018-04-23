import React, { Component } from 'react';
import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'reactstrap';

export default class TablePage extends Component {
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Header />
            <TextContent title="Betalingen">
              Cookie tiramisu bonbon dragée danish icing danish I love. Lemon drops halvah tiramisu tootsie roll cheesecake. Candy canes candy canes jelly beans I love. Tootsie roll I love cheesecake gingerbread dragée cupcake dragée marzipan cupcake.
            </TextContent>
            [tabel komt hier]
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
