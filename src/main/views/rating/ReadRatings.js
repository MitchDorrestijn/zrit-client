/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../../components/TextContent';
import RatingsTable from '../../components/RatingsTable';

/**
 * This component puts the textblock and ratingstable together and renders it
 */
const ReadRatings = (props) => {
  return (
		<div>
	    <TextContent title="Beoordelingen bekijken">
	      Hieronder kunt u beoordelingen bekijken die cliënten aan chauffeurs gegeven hebben.
				U kunt hier zoeken op een chauffer om de beoordelingen hiervan te bekijken,
				tevens kunt u de kolommen ordenen door op de kolom header te klikken.
	    </TextContent>
	    <RatingsTable routes={props.routes} history={props.history}/>
  	</div>
	);
}

export default ReadRatings;
