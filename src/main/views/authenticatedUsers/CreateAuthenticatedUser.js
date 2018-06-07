/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import AuthenticatedUserForm from '../../components/AuthenticatedUserForm';

/**
 * This component puts the textblock and AuthenticatedUserForm (for create) together and renders it
 */
const CreateAuthenticatedUser = (props) => {
  return (
		<div>
	    <TextContent title="Beheerder toevoegen">
	      Op deze pagina kunt u een beheerder toevoegen.
				Vul alle velden hieronder in en de nieuwe beheerder wordt aan het systeem toegevoegd.
	    </TextContent>
	    <AuthenticatedUserForm routes={props.routes} history={props.history} />
  	</div>
	);
}

export default CreateAuthenticatedUser;
