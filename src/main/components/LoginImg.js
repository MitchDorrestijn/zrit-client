/**
 * React related imports
 */
import React from 'react';

/**
 * Other imports
 */
import HomeImg from '../assets/img/home.jpg';

/**
 * This component renders the image on the left side of login page
 */
const LoginImg = () => {
  return (
    <div className="grandParentContaniner">
      <div className="parentContainer">
        <img src={HomeImg} className="img-fluid" alt="zorgrit introimage"/>
      </div>
    </div>
  );
}

export default LoginImg;
