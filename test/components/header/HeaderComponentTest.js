import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HeaderComponent from 'components/header/HeaderComponent';

describe('Header Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HeaderComponent />);
  });
  it('should render without exploding', () => {
    expect(wrapper.hasClass('header')).to.be.true;
    expect(wrapper.type()).to.equal('div');
  });
  it('should render the site name', () => {
    expect(wrapper.find('.header__title')).to.have.length(1);
    expect(wrapper.find('.header__title').text()).to.equal('Christopher De Leon');
  });
  it('should render the hamburger', () => {
    expect(wrapper.find('.menu')).to.have.length(1);
  });
});
