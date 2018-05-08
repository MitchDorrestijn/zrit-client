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
 * This component puts the textblock and zorginstellingform (for create) together and renders it
 */
const CreateZorginstelling = () => {
  return (
		<div>
	    <TextContent title="Zorginstelling toevoegen">
	      Op deze pagina kunt u een zorginstelling toevoegen.
				Vul alle velden hieronder in en de nieuwe zorginstelling wordt aan het systeem toegevoegd.
	    </TextContent>
	    <ZorginstellingForm/>
  	</div>
	);
}

export default CreateZorginstelling;
