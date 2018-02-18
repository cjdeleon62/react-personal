import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BioComponent from 'components/bio/BioComponent';
import ProjectListComponent from 'components/projects/ProjectListComponent';
import LayoutComponent from 'components/layout/LayoutComponent';

// this will render different routes based on the url that is visited
const RoutesComponent = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path='/' component={BioComponent} />
        <Route path='/portfolio' component={ProjectListComponent} />
    </div>
  )
}

RoutesComponent.displayName = 'RoutesComponent';
export default RoutesComponent;
