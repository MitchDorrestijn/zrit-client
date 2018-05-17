/**
 * React related imports
 */
import React from 'react';

/**
 * Self made components imports
 */
import TextContent from '../components/TextContent';

/**
 * This component renders the about page
 */
const AboutPage = (props) => {
	return (
    <div>
      <TextContent title="Over ons pagina">
      Op deze pagina komt informatie over het bedrijf
      </TextContent>
    </div>
	);
}

export default AboutPage;
