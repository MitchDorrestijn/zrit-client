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
import ReadRatings from '../views/rating/ReadRatings';
import ReadRides from '../views/rides/ReadRides';
import ReadRideClient from '../views/rides/ReadRideClient';
import ReadRideChauffeur from '../views/rides/ReadRideChauffeur';
import ReadBetalingen from '../views/betalingen/ReadBetalingen';
import StarterPage from '../views/StarterPage';
import ReadAuthenticatedUsers from '../views/authenticatedUsers/ReadAuthenticatedUsers';

/**
 * This component renders the read (overview) page for the elements based on the URL
 */
const ReadPage = (props) => {
	let pageURLToMatch = props.match.url.replace(/[0-9]/g, '').slice(0, -1);

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
						{props.match.url === props.routes.readRatings &&
							<ReadRatings routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.readAllRides &&
							<ReadRides routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.readRideClient &&
							<ReadRideClient routes={props.routes} history={props.history} />
						}
						{pageURLToMatch === props.routes.readRideChauffeur &&
							<ReadRideChauffeur routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.readBetalingen &&
							<ReadBetalingen routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.starterpage &&
							<StarterPage routes={props.routes} history={props.history} />
						}
						{props.match.url === props.routes.readAuthenticatedUsers &&
							<ReadAuthenticatedUsers routes={props.routes} history={props.history} />
						}
          <Footer />
        </Col>
      </Row>
    </Container>
	);
}

export default ReadPage;
