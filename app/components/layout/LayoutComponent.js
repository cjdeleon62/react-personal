import React from 'react';
import BioComponent from 'components/bio/BioComponent';
import ProjectListComponent from 'components/projects/ProjectListComponent';

const LayoutComponent = () => (
  <div className="layout">
    <BioComponent />
    <ProjectListComponent />
  </div>
);

LayoutComponent.displayName = 'Layout';
export default LayoutComponent;
