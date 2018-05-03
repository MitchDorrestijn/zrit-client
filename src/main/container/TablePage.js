import React, { Component } from 'react';
import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Footer from '../components/Footer';
import pageText from '../components/PageText';
import ZorginstellingTable from '../components/ZorginstellingTable';
import { Container, Row, Col } from 'reactstrap';

//this class puts all the necessary components together to render the full table page.
export default class TablePage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Header routes={this.props.routes} history={this.props.history} />
            <TextContent title={pageText.zorginstellingReadTitle}>
              {pageText.zorginstellingReadText}
            </TextContent>
            <ZorginstellingTable routes={this.props.routes} history={this.props.history} />
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
