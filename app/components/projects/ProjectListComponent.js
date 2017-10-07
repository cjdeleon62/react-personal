import React, { Component } from 'react';
import ProjectComponent from 'components/projects/ProjectComponent';
import ProjectModalComponent from 'components/projects/ProjectModalComponent';

const projectNames = ['Showtime React', 'Hello Blog', 'Weather Maps'];

const projects = [
  {
    'title': 'Showtime React',
    'description': 'A webpage using React where you can search and watch videos grabbed from the youtube API.',
    'technology': 'React.js, Webpack, Node.js',
    'link': '//google.com',
    // 'image': '../../app/assets/images/ShowtimeReactPic.jpg',
  },
  {
    'title': 'Hello Blog',
    'description': 'A small project using React and Redux where you can post, modify, and delete blog posts.',
    'technology': 'React.js, Redux, Webpack, Node.js',
    'link': '//instagram.com',
    // 'image': '../../app/assets/images/HelloBlogPic.jpg',
  },
  {
    'title': 'Weather Maps',
    'description': 'You can look up the weather in any U.S. city. Uses the openweathermap API.',
    'technology': 'React.js, Redux, Webpack, Node.js',
    'link': '//facebook.com',
    // 'image': '../../app/assets/images/WeatherMapsPic.jpg',
  }
]

class ProjectListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      project: null,
    };

    this.handleOpenModal = this.openModal.bind(this);
    this.handleCloseModal = this.closeModal.bind(this);
  }

  openModal(project) {
    console.log('firing open modal');
    this.setState({ modal: true, project: project });
  }

  closeModal() {
    console.log('firing close modal');
    this.setState({ modal: false, project: null });
  }

  render() {
    return (
      <div className="project__list">
        <div className="project__list__title">My Portfolio</div>
        <hr />
        {projects.map( project => <ProjectComponent 
          key={project.title} 
          name={project.title} 
          description={project.description}
          technology={project.technology}
          link={project.link}
          onModalOpen={this.handleOpenModal}
          />)}
        <ProjectModalComponent
          isModalOpen={this.state.modal}
          onModalClose={this.handleCloseModal}
        />
      </div>
    );
  }
};

ProjectListComponent.displayName = 'ProjectListComponent';

export default ProjectListComponent;
