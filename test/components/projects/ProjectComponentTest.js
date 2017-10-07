import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProjectComponent from 'components/projects/ProjectComponent';

describe('Project Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProjectComponent />);
  });
  it('should render without exploding', () => {
    expect(wrapper.hasClass('project')).to.be.true;
    expect(wrapper.type()).to.equal('div');
  });
  it('should render the title of the project', () => {
    expect(wrapper.find('.project__title')).to.have.length(1);
  });
  it('should render an image of the project', () => {
    expect(wrapper.find('.project__image')).to.have.length(1);
  });
});
