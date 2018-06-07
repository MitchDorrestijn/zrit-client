/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import RittenForm from '../../components/RittenForm';

/**
 * This component puts the textblock and create ride (for create) together and renders it
 */
const CreateRide = () => {
  return (
		<div>
	    <TextContent title="Rit toevoegen">
	      Op deze pagina kunt u een rit toevoegen.
				Vul alle velden hieronder in en de nieuwe rit wordt aan het systeem toegevoegd.
	    </TextContent>
	    <RittenForm/>
  	</div>
	);
}

export default CreateRide;
