import React from 'react';
import HeaderComponent from 'components/header/HeaderComponent';
import BioComponent from 'components/bio/BioComponent';
import ProjectListComponent from 'components/projects/ProjectListComponent';
import FooterComponent from 'components/footer/FooterComponent';
import RoutesComponent from 'components/routes/RoutesComponent';

const AppComponent = () => (
  <div className="container">
    <HeaderComponent />
    <RoutesComponent />
  </div>
);

AppComponent.displayName = 'App';
export default AppComponent;
