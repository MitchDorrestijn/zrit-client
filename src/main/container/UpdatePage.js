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
import UpdateZorginstelling from '../views/zorginstelling/UpdateZorginstelling';

/**
 * This component renders the update page for the elements based on the URL
 */
const UpdatePage = (props) => {
  let pageURLToMatch = props.match.url.replace(/[0-9]/g, '').slice(0, -1);
  return (
		<Container>
	    <Row>
	      <Col>
	        <Header routes={props.routes} history={props.history}/>
						{pageURLToMatch === props.routes.updateZorginstelling &&
							<UpdateZorginstelling routes={props.routes} history={props.history}/>
						}
	        <Footer/>
	      </Col>
	    </Row>
  	</Container>
	);
}

export default UpdatePage;
