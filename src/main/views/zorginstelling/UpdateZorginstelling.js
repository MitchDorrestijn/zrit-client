/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import ZorginstellingForm from '../../components/ZorginstellingForm';

/**
 * This component puts the textblock and zorginstellingform (for update) together and renders it
 */
const UpdateZorginstelling = (props) => {
	return (
    <div>
      <TextContent title="Zorginstelling bewerken">
				Op deze pagina kunt u de gegevens van een zorginstelling aanpassen / wijzigen.
				De informatie die op dit moment in de velden staat is de informatie die het systeem nu heeft.
				Om deze te bewerken kunt u deze informatie aanpassen en op 'oplaan' drukken.
				Op de zorginstelling te verwijderen drukt u op de knop 'verwijderen'.
      </TextContent>
      <ZorginstellingForm update={true} id={1} />
    </div>
	);
}

export default UpdateZorginstelling;
