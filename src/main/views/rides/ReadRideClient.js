/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import RideTableClient from '../../components/RideTableClient';

/**
 * This component puts the textblock and rides table together and renders it
 */
const ReadRideClient = (props) => {
  return (
		<div>
	    <TextContent title="Ritten beheren">
	      Hieronder ziet U de ritten van een specifieke cliënt.
	    </TextContent>
	    <RideTableClient routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadRideClient;
