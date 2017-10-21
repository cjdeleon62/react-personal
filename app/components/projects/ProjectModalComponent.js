import React from 'react';

const ProjectModalComponent = props => {
  const modalClasses = props.isModalOpen ? '--open' : '';
  return (
    <div id="myModal" className={`modal${modalClasses}`}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-header-title">
            {props.project.title}
          </div>
          <span
            className="close"
            onClick={props.onModalClose}
          >
            &times;
          </span>
        </div>
        <div className="modal-text">
          <p>{props.project.description}</p>
          <p><strong>Technology Stack: </strong>{props.project.technology}</p>
          <p><a href={props.project.link}>Check it out</a></p>
        </div>
      </div>
    </div>
  )
}

ProjectModalComponent.displayName = 'ProjectModalComponent';

export default ProjectModalComponent;
