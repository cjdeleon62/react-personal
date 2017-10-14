import React from 'react';

const ProjectModalComponent = props => {
  const modalClasses = props.isModalOpen ? '--open' : '';
  return (
    <div id="myModal" className={`modal${modalClasses}`}>
      <div className="modal-content">
        <div className="modal-header">
          {props.project.title}
          <span
            className="close"
            onClick={props.onModalClose}
          >
            &times;
          </span>
        </div>
        <div className="modal-text">
          <p>{props.project.description}</p>
        </div>
      </div>
    </div>
  )
}

ProjectModalComponent.displayName = 'ProjectModalComponent';

export default ProjectModalComponent;
