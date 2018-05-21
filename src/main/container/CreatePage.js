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
import CreateZorginstelling from '../views/zorginstelling/CreateZorginstelling';
import CreateClient from '../views/client/CreateClient';
import CreateChauffeur from '../views/chauffeur/CreateChauffeur';

/**
 * This component renders the create page for the elements based on the URL
 */
const CreatePage = (props) => {
	return (
    <Container>
      <Row>
        <Col>
          <Header routes={props.routes} history={props.history} />
						{props.match.url === props.routes.createZorginstelling &&
							<CreateZorginstelling routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.createClient &&
							<CreateClient routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.createChauffeur &&
							<CreateChauffeur routes={props.routes} history={props.history} />
						}
          <Footer />
        </Col>
      </Row>
    </Container>
	);
}

export default CreatePage;
