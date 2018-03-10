import React from 'react';

const FooterIcons = [ 
  {
    iconClass: 'fab fa-linkedin',
    iconText: 'Linkedin',
  },
  {
    iconClass: 'fab fa-github',
    iconText: 'Github',
  },
];

const FooterComponent = () => (
  <div className="footer">
    <div className="footer__title">
    </div>
    <div className="footer__nav">
     {FooterIcons.map( icon => (
           <div key={icon.iconClass} className="footer__link">
             <i className={`footer__icon ${icon.iconClass}`}></i>
             <span className="footer__icon__text">{icon.iconText}</span>
           </div>
         ))
      }

      <div className="footer__copyright">
        <span className="copyright__icon">©</span>{`Copyright ${new Date().getFullYear()} cjdeleon`}
      </div>
    </div>
  </div>
);

FooterComponent.displayName = "Footer";
export default FooterComponent;