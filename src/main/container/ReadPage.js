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
import ReadZorginstelling from '../views/zorginstelling/ReadZorginstelling';
import ReadChauffeur from '../views/chauffeur/ReadChauffeur';
import ReadClient from '../views/client/ReadClient';

/**
 * This component renders the read (overview) page for the elements based on the URL
 */
const ReadPage = (props) => {
	return (
    <Container>
      <Row>
        <Col>
          <Header routes={props.routes} history={props.history} />
						{props.match.url === props.routes.readZorginstelling &&
	          	<ReadZorginstelling routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.readChauffeur &&
							<ReadChauffeur routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.readClienten &&
							<ReadClient routes={props.routes} history={props.history} />
						}
          <Footer />
        </Col>
      </Row>
    </Container>
	);
}

export default ReadPage;
