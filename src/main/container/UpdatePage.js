import React, { Component } from 'react';
import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Footer from '../components/Footer';
import ZorginstellingForm from '../components/ZorginstellingForm';
import { Container, Row, Col } from 'reactstrap';

//this class puts all the necessary components together to render the full update page.
export default class UpdatePage extends Component {
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Header />
            <TextContent title="Zorginstelling bewerken">
              Cookie tiramisu bonbon dragée danish icing danish I love. Lemon drops halvah tiramisu tootsie roll cheesecake. Candy canes candy canes jelly beans I love. Tootsie roll I love cheesecake gingerbread dragée cupcake dragée marzipan cupcake.
            </TextContent>
            <ZorginstellingForm update={true} id={1} />
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
