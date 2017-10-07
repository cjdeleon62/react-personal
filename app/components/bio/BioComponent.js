import React, { Component } from 'react';
import ProfileImage from 'assets/images/profile-pic.jpg';

const bioText = "A 26 year old NJIT student from Jersey City," +
  " NJ who loves web devlopment and design." +
  " Experience with HTML5, CSS, SASS, JavaScript, PHP, ReactJS, Webpack, and NodeJS.";

class BioComponent extends Component {
  render() {
    return (
      <div className="bio">
        <div className="welcome__header">
          Hi, my name is Chris. 
        </div>
        <div className="welcome__text">
          I'm a Front End Developer who is passionate about creating the best user experience and architecting efficient solutions.
        </div>
      </div>
    )
  }
};

BioComponent.displayName = 'Bio';
export default BioComponent;
