import React, { Component } from 'react';
import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Footer from '../components/Footer';
import Titlemaker from '../components/Titlemaker';
import CRUDTable from '../components/CRUDTable';
import { Container, Row, Col } from 'reactstrap';

//this class puts all the necessary components together to render the full table page.
export default class TablePage extends Component {
  constructor(props){
    super(props);
    this.pageTitle = Titlemaker(this.props.match.url);
  }

  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Header />
            <TextContent title={this.pageTitle}>
              Cookie tiramisu bonbon dragée danish icing danish I love. Lemon drops halvah tiramisu tootsie roll cheesecake. Candy canes candy canes jelly beans I love. Tootsie roll I love cheesecake gingerbread dragée cupcake dragée marzipan cupcake.
            </TextContent>
            <CRUDTable />
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
