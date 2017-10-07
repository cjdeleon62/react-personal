import React, { Component } from 'react';

class ProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProject: '',
    };
    this.toggleProjectView = this.toggleProjectView.bind(this);
    this.renderProjectView = this.renderProjectView.bind(this);
  }

  toggleProjectView() {
    setTimeout(() => {
      this.setState({ activeProject: !this.state.activeProject });
    }, 500);
  }

  renderProjectView() {
    const { name, description, technology, link, image } = this.props;
    const { activeProject } = this.state;

    if (this.state.activeProject) {
      return (
        <div>
          <div className="project__text">
            {description}
          </div>
          <div className="project__technology">
            {technology}
          </div>
          <div className="project__link">
            <a href={link}>Check it out!</a>
          </div>
        </div>
      )
    }

    return (
      <div className="project__title">
        {name}
      </div>
    )

  }

  render() {
    const { name, description, technology, link, image, onModalOpen } = this.props;
    const projectClasses = !this.state.activeProject ? 'project' : 'project__active';

    return(
      <div key={name} className={projectClasses} onClick={onModalOpen}>
        {this.renderProjectView()}
      </div>
    )
  }
}

ProjectComponent.displayName = "Project";
export default ProjectComponent;
