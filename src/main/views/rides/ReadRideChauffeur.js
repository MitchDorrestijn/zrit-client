/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import RideTableChauffeur from '../../components/RideTableChauffeur';

/**
 * This component puts the textblock and rides table together and renders it
 */
const ReadRideChauffeur = (props) => {
  return (
		<div>
	    <TextContent title="Ritten beheren chauffeur">
	      Hieronder ziet U de ritten van een specifieke chauffeur.
	    </TextContent>
	    <RideTableChauffeur routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadRideChauffeur;
