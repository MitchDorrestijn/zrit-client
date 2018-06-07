/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../components/TextContent';
import {parseJwt, getJwtToken} from '../global/Methods';

/**
 * This component puts the textblock together and renders it
 */
const StarterPage = (props) => {
  return (
		<div>
	    <TextContent title={"Hallo " + parseJwt(getJwtToken()).sub}>
        Welkom bij het Zorgrit CMS. Klik op een van de items in het menu om te beginnen.
	    </TextContent>
  	</div>
	);
}

export default StarterPage;
