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
 * This component puts the textblock and clientform (for create) together and renders it
 */
const CreateClient = () => {
  return (
		<div>
	    <TextContent title="Cliënt toevoegen">
	      Op deze pagina kunt u een cliënt toevoegen.
				Vul alle velden hieronder in en de nieuwe cliënt wordt aan het systeem toegevoegd.
	    </TextContent>
	    <ClientForm/>
  	</div>
	);
}

export default CreateClient;
