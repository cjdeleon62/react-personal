import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from 'components/App';
import Header from 'components/header/HeaderComponent';
import Project from 'components/projects/ProjectComponent';
import Bio from 'components/bio/BioComponent';
import Contact from 'components/contacts/ContactComponent';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render without exploding', () => {
    expect(wrapper.hasClass('container')).to.be.true;
  });
  it('should render the Header Component', () => {
    expect(wrapper.find(Header)).to.have.length(1);
  });
  it('should render the Project Component', () => {
    expect(wrapper.find(Project)).to.have.length(1);
  });
  it('should render the Bio Component', () => {
    expect(wrapper.find(Bio)).to.have.length(1);
  });
  it('should render the Contact Component', () => {
    expect(wrapper.find(Contact)).to.have.length(1);
  });
});
