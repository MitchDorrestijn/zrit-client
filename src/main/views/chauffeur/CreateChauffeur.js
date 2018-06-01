/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import ChauffeurForm from '../../components/ChauffeurForm';

/**
 * This component puts the textblock and chauffeur form (for create) together and renders it
 */
const CreateChauffeur = (props) => {
  return (
		<div>
	    <TextContent title="Chauffeur toevoegen">
	      Op deze pagina kunt u een chauffeur toevoegen.
				Vul alle velden hieronder in en de nieuwe chauffeur wordt aan het systeem toegevoegd.
	    </TextContent>
	    <ChauffeurForm routes={props.routes} history={props.history} />
  	</div>
	);
}

export default CreateChauffeur;
