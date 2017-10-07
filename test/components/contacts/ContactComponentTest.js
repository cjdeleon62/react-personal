import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ContactComponent from 'components/contacts/ContactComponent';

describe('Contact Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContactComponent />);
  });

  it('should be a div with a class of contact', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.hasClass('contact')).to.be.true;
  });
});
