import React, { Component } from 'react';

const programIcons = {
  react: 'fab fa-react',
  node: 'fab fa-node-js',
};


class ProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    const { openModal, project } = this.props;
    openModal(project);
  }

  
  render() {
    const { project } = this.props;
    const { title, description, stack, link } = project;

    return (
      <div key={title} className="project scale" onClick={this.handleModal}>
        <div className="project__title">
          <strong>{title}</strong>
        </div>
        <div className="project__description">
          {description}
          <div className="project__stack">
            Tech Stack:
            {stack.map(program => (<i key={`${title}-${program}`} className={programIcons[program]} />))}
          </div>
          <a href={link}>
            <button>
              Check it out
            </button>
          </a>
        </div>
      </div>
    );
  }
}

ProjectComponent.displayName = 'Project';
export default ProjectComponent;
