/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import ZorginstellingTable from '../../components/ZorginstellingTable';

/**
 * This component puts the textblock and zorginstellingtable together and renders it
 */
const ReadZorginstelling = (props) => {
  return (
		<div>
	    <TextContent title="Zorginstellingen beheren">
	      Hieronder kunt u zorginstellingen beheren.
				Druk op het rondje vooraan de tabel om een record te selecteren,
				vervolgens kunt u het record bewerken door op de knop 'bewerken' te drukken.
				Om een nieuw item toe te toevoegen drukt u op de knop 'Toevoegen'.
	    </TextContent>
	    <ZorginstellingTable routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadZorginstelling;
