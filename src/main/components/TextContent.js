import React from 'react';
import { Col } from 'reactstrap';

import '../css/textblock.css';

//this stateless functional component renders the textblock
const TextContent = (props) => {
	return (
		<Col className="textblock" sm="12" md={{ size: 6, offset: 3 }}>
			<h2>{props.title}</h2>
			<p>{props.children}</p>
			<hr />
		</Col>
	);
}

export default TextContent;