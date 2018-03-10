import React from 'react';
import HeaderComponent from 'components/header/HeaderComponent';
import BioComponent from 'components/bio/BioComponent';
import ProjectListComponent from 'components/projects/ProjectListComponent';
import EmailComponent from 'components/email/EmailComponent';
import FooterComponent from 'components/footer/FooterComponent';

const AppComponent = () => (
  <div className="app">
    <HeaderComponent />
    <BioComponent />
    <ProjectListComponent />
    <EmailComponent />
    <FooterComponent />
  </div>
);

AppComponent.displayName = 'App';
export default AppComponent;