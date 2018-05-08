/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../components/TextContent';

/**
 * This component renders the error page
 */
const ErrorPage = (props) => {
	return (
    <div>
      <TextContent title="Oh nee!">
				Als u deze pagina ziet betekent het dat er iets niet helemaal goed gegaan is. Ga terug en probeer het opnieuw!
      </TextContent>
    </div>
	);
}

export default ErrorPage;
