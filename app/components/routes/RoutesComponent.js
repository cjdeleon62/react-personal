import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BioComponent from 'components/bio/BioComponent';
import ProjectListComponent from 'components/projects/ProjectListComponent';
import ContactComponent from 'components/contact/ContactComponent';

// this will render different routes based on the url that is visited
const RoutesComponent = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path='/' component={BioComponent} />
        <Route path='/portfolio' component={ProjectListComponent} />
        <Route path='/contact-me' component={ContactComponent} />
      </Switch>
    </div>
  )
}

RoutesComponent.displayName = 'RoutesComponent';
export default RoutesComponent;
