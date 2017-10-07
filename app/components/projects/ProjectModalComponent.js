import React from 'react';

const ProjectModalComponent = props => {
  const modalClasses = props.isModalOpen ? '--open' : '';
  console.log(props.isModalOpen);
  return (
    <div id="myModal" className={`modal${modalClasses}`}>
      <div className="modal-content">
        <div className="modal-header">
          This is the modal header title
          <span
            className="close"
            onClick={props.onModalClose}
          >
            &times;
          </span>
        </div>
        <div className="modal-text">
          <p>This is the project modal</p>
        </div>
      </div>
    </div>
  )
}

ProjectModalComponent.displayName = 'ProjectModalComponent';

export default ProjectModalComponent; 
