import React, { Component } from 'react';

class ProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.renderProjectView = this.renderProjectView.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    const { openModal, project } = this.props;
    openModal(project);
  }

  renderProjectView(title) {
    return (
      <div className="project__title">
        {title}
      </div>
    );
  }

  render() {
    const { project } = this.props;
    console.log('here is the project', project);
    const { title } = project;

    return (
      <div key={title} className="project" onClick={this.handleModal}>
        {this.renderProjectView(title)}
      </div>
    );
  }
}

ProjectComponent.displayName = 'Project';
export default ProjectComponent;
