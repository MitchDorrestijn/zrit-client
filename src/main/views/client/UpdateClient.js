/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import ClientForm from '../../components/ClientForm';

/**
 * This component puts the textblock and client form (for update) together and renders it
 */
const UpdateClient = (props) => {
	let pageURLToGoTo = props.history.location.pathname.replace(props.routes.updateClient + "/", "");
	return (
    <div>
      <TextContent title="Cliënt bewerken">
				Op deze pagina kunt u de gegevens van een cliënt aanpassen / wijzigen.
				De informatie die op dit moment in de velden staat is de informatie die het systeem nu heeft.
				Om deze te bewerken kunt u deze informatie aanpassen en op 'oplaan' drukken.
				Op de cliënt te verwijderen drukt u op de knop 'verwijderen'.
      </TextContent>
      <ClientForm update={true} id={pageURLToGoTo} />
    </div>
	);
}

export default UpdateClient;
