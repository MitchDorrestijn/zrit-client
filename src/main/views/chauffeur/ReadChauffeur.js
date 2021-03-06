/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import ChauffeurTable from '../../components/ChauffeurTable';

/**
 * This component puts the textblock and chauffeur table together and renders it
 */
const ReadChauffeur = (props) => {
  return (
		<div>
	    <TextContent title="Chauffeurs beheren">
	      Hieronder kunt u chauffeurs beheren.
				Druk op het rondje vooraan de tabel om een record te selecteren,
				vervolgens kunt u het record bewerken door op de knop 'bewerken' te drukken.
				Om een nieuw item toe te toevoegen drukt u op de knop 'Toevoegen'.
	    </TextContent>
	    <ChauffeurTable routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadChauffeur;
