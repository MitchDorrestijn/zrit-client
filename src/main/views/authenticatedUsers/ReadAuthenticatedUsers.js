/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import AuthenticatedUsersTable from '../../components/AuthenticatedUsersTable';

/**
 * This component puts the textblock and AuthenticatedUsersTable together and renders it
 */
const ReadAuthenticatedUsers = (props) => {
  return (
		<div>
	    <TextContent title="Beheerders beheren">
	      Hieronder kunt u beheerders beheren.
				Druk op het rondje vooraan de tabel om een record te selecteren.
				Om een nieuwe beheerder toe te toevoegen drukt u op de knop 'Toevoegen'.
	    </TextContent>
	    <AuthenticatedUsersTable routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadAuthenticatedUsers;
