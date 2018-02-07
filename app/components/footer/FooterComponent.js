import React from 'react';

// TODO
// render the links to the different contact sources
// contact sources: github, linkedin
// linkedin-square: fa-linkedin-square
// linkedin: fa-linkedin
// github-square:fa-github-square
// github: fa-github
// github-alt: fa-github-alt
//

const mobileFooterIcons = [ 'fa fa-linkedin', 'fa fa-github'];
const FooterIcons = [ 'fa fa-linkedin-square', 'fa fa-github-square'];
const FooterComponent = () => (
  <div className="footer">
    <div className="footer__title">
    </div>
    <div className="footer__nav">
     {FooterIcons.map( iconClass => (
           <div key={iconClass} className="footer__link">
             <i className={`footer__icon ${iconClass}`}></i>
           </div>
         ))
      }
      </div>
  </div>
);

FooterComponent.displayName = "Footer";
export default FooterComponent;