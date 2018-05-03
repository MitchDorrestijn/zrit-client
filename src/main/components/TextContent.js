/**
 * React related imports
 */
import React from 'react';
import {Col} from 'reactstrap';

/**
 * Style related imports
 */
import '../css/textblock.css';

/**
 * This component renders the textblock above the CRUD pages
 */
const TextContent = (props) => {
  return (
		<Col className="textblock" sm="12" md={{
      size: 6,
      offset: 3
    }}>
	    <h2>{props.title}</h2>
	    <p>{props.children}</p>
    	<hr/>
  	</Col>
	);
}

export default TextContent;
