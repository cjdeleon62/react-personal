import React from 'react';
import HeaderComponent from 'components/header/HeaderComponent';
import FooterComponent from 'components/footer/FooterComponent';
import RoutesComponent from 'components/routes/RoutesComponent';

const AppComponent = () => (
  <div className="app">
    <HeaderComponent />
    <RoutesComponent />
  </div>
);

AppComponent.displayName = 'App';
export default AppComponent;
