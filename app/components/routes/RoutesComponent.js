import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BioComponent from 'components/bio/BioComponent';
import FooterComponent from 'components/footer/FooterComponent';
import ProjectListComponent from 'components/projects/ProjectListComponent';

// this will render different routes based on the url that is visited
const RoutesComponent = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={BioComponent} />
        <Route path='/portfolio' component={ProjectListComponent} />
      </Switch>
    </div>
  )
}

RoutesComponent.displayName = 'RoutesComponent';
export default RoutesComponent;
