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
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../views/About';

/**
 * This component renders the about page for the elements based on the URL
 */
const AboutPage = (props) => {
	return (
    <Container>
      <Row>
        <Col>
          <Header routes={props.routes} history={props.history} />
						<About />
          <Footer />
        </Col>
      </Row>
    </Container>
	);
}

export default AboutPage;
