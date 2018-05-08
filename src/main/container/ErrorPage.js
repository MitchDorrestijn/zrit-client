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
import Error from '../views/Error';

/**
 * This component renders the create page for the elements based on the URL
 */
const ErrorPage = (props) => {
	return (
    <Container>
      <Row>
        <Col>
          <Header routes={props.routes} history={props.history} />
						<Error />
          <Footer />
        </Col>
      </Row>
    </Container>
	);
}

export default ErrorPage;
