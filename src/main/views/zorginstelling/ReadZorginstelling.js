/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import ZorginstellingTable from '../../components/ZorginstellingTable';
import {checkIfUserIsAdmin} from '../../global/Methods';

/**
 * This component puts the textblock and zorginstellingtable together and renders it
 */
const ReadZorginstelling = (props) => {
  return (
		<div>
	    <TextContent title={checkIfUserIsAdmin() ? "Beheer zorginstellingen" : "Uw zorginstelling"}>
        {checkIfUserIsAdmin() ?
          <div>
            Hieronder kunt u zorginstellingen beheren.
            Druk op het rondje vooraan de tabel om een record te selecteren,
            vervolgens kunt u het record bewerken door op de knop 'bewerken' te drukken.
            Om een nieuw item toe te toevoegen drukt u op de knop 'Toevoegen'.
          </div>
          :
          <div>
            Hieronder ziet u uw zorginstelling(en). Als u deze wil bewerken of verwijderen moet u de superbeheerder inschakelen.
          </div>
        }
	    </TextContent>
	    <ZorginstellingTable routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadZorginstelling;
