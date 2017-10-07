import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BioComponent from 'components/bio/BioComponent';

describe('Bio Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BioComponent />);
  });

  it('should display an introduction message', () => {
    expect(wrapper.find('.intro__text')).to.have.length(1);
  });
  it('should display the profile pic', () => {
    expect(wrapper.find('.bio__pic')).to.have.length(1);
  });
  it('should display the bio description', () => {
    expect(wrapper.find('.bio__description')).to.have.length(1);
  });
});
