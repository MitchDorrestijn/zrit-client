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
 * This component puts the textblock and chauffeur form (for update) together and renders it
 */
const UpdateChauffeur = (props) => {
	let pageURLToGoTo = props.history.location.pathname.replace(props.routes.updateChauffeur + "/", "");
	return (
    <div>
      <TextContent title="Chauffeur bewerken">
				Op deze pagina kunt u de gegevens van een chauffeur aanpassen / wijzigen.
				De informatie die op dit moment in de velden staat is de informatie die het systeem nu heeft.
				Om deze te bewerken kunt u deze informatie aanpassen en op 'oplaan' drukken.
				Op de chauffeur te verwijderen drukt u op de knop 'verwijderen'.
      </TextContent>
      <ChauffeurForm update={true} id={pageURLToGoTo} />
    </div>
	);
}

export default UpdateChauffeur;
