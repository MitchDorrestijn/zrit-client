/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import ClientTable from '../../components/ClientTable';

/**
 * This component puts the textblock and client table together and renders it
 */
const ReadClient = (props) => {
  return (
		<div>
	    <TextContent title="Cliënten beheren">
	      Hieronder kunt u cliënten beheren.
				Druk op het rondje vooraan de tabel om een record te selecteren,
				vervolgens kunt u het record bewerken door op de knop 'bewerken' te drukken.
				Om een nieuw item toe te toevoegen drukt u op de knop 'Toevoegen'.
	    </TextContent>
	     <ClientTable routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadClient;
