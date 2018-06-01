/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import BetalingenTable from '../../components/BetalingenTable';

/**
 * This component puts the textblock and betalingen table together and renders it
 */
const readBetalingen = (props) => {
  return (
		<div>
	    <TextContent title="Betalingen beheren">
	      Hieronder kunt u betalingen beheren.
				Druk op het rondje vooraan de tabel om een record te selecteren,
				vervolgens kunt u het record bewerken door op de knop 'bewerken' te drukken.
				Om een nieuwe betaling toe te toevoegen drukt u op de knop 'Toevoegen'.
	    </TextContent>
	    <BetalingenTable routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default readBetalingen;
