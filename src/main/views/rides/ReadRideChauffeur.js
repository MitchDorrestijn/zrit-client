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
  let pageURLToGoTo = props.history.location.pathname.replace(props.routes.readRideChauffeur + "/", "");

  return (
		<div>
	    <TextContent title="Ritten beheren chauffeur">
	      Hieronder ziet U de ritten van een specifieke chauffeur.
	    </TextContent>
	    <RideTableChauffeur routes={props.routes} history={props.history} id={pageURLToGoTo} />
  	</div>
	);
}

export default ReadRideChauffeur;
