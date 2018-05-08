/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../components/TextContent';

/**
 * This component puts the textblock and zorginstellingform (for update) together and renders it
 */
const UpdateZorginstelling = (props) => {
	return (
    <div>
      <TextContent title="Oh nee!">
				Als u deze pagina ziet betekent het dat er iets niet helemaal goed gegaan is. Ga terug en probeer het opnieuw!
      </TextContent>
    </div>
	);
}

export default UpdateZorginstelling;
