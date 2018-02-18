import React from 'react';
import HeaderComponent from 'components/header/HeaderComponent';
import FooterComponent from 'components/footer/FooterComponent';

const AppComponent = () => (
  <div className="app">
    <HeaderComponent />
    <BioComponent />
    <ProjectListComponent />
    <FooterComponent />
  </div>
);

AppComponent.displayName = 'App';
export default AppComponent;