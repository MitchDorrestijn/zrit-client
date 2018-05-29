/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import RideTable from '../../components/RideTable';

/**
 * This component puts the textblock and rides table together and renders it
 */
const ReadRides = (props) => {
  return (
		<div>
	    <TextContent title="Ritten beheren">
	      Hieronder kunt u ritten beheren.
				Druk op het rondje vooraan de tabel om een record te selecteren,
				vervolgens kunt u het record bewerken door op de knop 'bewerken' te drukken.
				Om een nieuw item toe te toevoegen drukt u op de knop 'Toevoegen'.
	    </TextContent>
	    <RideTable routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadRides;
