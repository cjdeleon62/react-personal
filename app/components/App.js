import React from 'react';
import HeaderComponent from 'components/header/HeaderComponent';
import BioComponent from 'components/bio/BioComponent';
import ProjectListComponent from 'components/projects/ProjectListComponent';
import FooterComponent from 'components/footer/FooterComponent';

const AppComponent = () => (
  <div className="container">
    <HeaderComponent />
    <BioComponent />
    <ProjectListComponent />
    <FooterComponent />
  </div>
);

AppComponent.displayName = 'App';
export default AppComponent;