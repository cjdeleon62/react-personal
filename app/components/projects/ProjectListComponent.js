import React, { Component } from 'react';
import ProjectComponent from 'components/projects/ProjectComponent';
import ProjectModalComponent from 'components/projects/ProjectModalComponent';

const projects = [
  {
    title: 'Showtime React',
    description: 'A webpage using React where you can search and watch videos grabbed from the youtube API.',
    technology: 'React.js, Webpack, Node.js',
    link: '//google.com',
    stack: ['react', 'node'],
    // 'image': '../../app/assets/images/ShowtimeReactPic.jpg',
  },
  {
    title: 'Hello Blog',
    description: 'A small project using React and Redux where you can post, modify, and delete blog posts.',
    technology: 'React.js, Redux, Webpack, Node.js',
    link: '//instagram.com',
    stack: ['react', 'node'],
    // 'image': '../../app/assets/images/HelloBlogPic.jpg',
  },
  {
    title: 'Weather Maps',
    description: 'You can look up the weather in any U.S. city. Uses the openweathermap API.',
    technology: 'React.js, Redux, Webpack, Node.js',
    link: '//facebook.com',
    stack: ['react', 'node'],
    // 'image': '../../app/assets/images/WeatherMapsPic.jpg',
  }
]

class ProjectListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      project: {},
    };

    this.handleOpenModal = this.openModal.bind(this);
    this.handleCloseModal = this.closeModal.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.project !== nextState.project;
  }

  openModal(project) {
    this.setState({ modal: true, project });
  }

  closeModal() {
    this.setState({ modal: false, project: {} });
  }

  render() {
    return (
      <div className="projects contain">
        <div className="projects__title">Recent Work</div>
        <div className="project__list">
          {projects.map(project => (
            <ProjectComponent
              key={project.title}
              project={project}
              openModal={this.handleOpenModal}
            />
          ))}
        </div>
        <ProjectModalComponent
          isModalOpen={this.state.modal}
          onModalClose={this.handleCloseModal}
          project={this.state.project}
        />
      </div>
    );
  }
};

ProjectListComponent.displayName = 'ProjectListComponent';

export default ProjectListComponent;
