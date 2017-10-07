import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const siteName = 'Christopher De Leon';
const navItems = [
  {
    text: 'About Me',
    key: 'about',
    linkUri: '/',
  },
  {
    text: 'Portfolio',
    key: 'portfolio',
    linkUri: '/portfolio',
  },
  {
    text: 'Contact Me',
    key: 'contacts',
    linkUri: '/contacts',
  },
]
// TODO
//  The header component should render links
// Add Material Design to the hamburger button
class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: window.location.pathname,
    };

    this.handleNavItemSelect = this.handleNavItemSelect.bind(this);
    this.loadNavItems = this.loadNavItems.bind(this);
  }

  handleNavItemSelect(e) {
    this.state.currentView !== e.target.id ? this.setState({ currentView: e.target.id }) : null;
  }

  loadNavItems(item) {
    const isActive = this.state.currentView === item.linkUri ? 'is-active' : '';
    return (
      <li className={`header__menu__item ${isActive}`} onClick={this.handleNavItemSelect} key={item.key}>
        <Link id={item.linkUri} to={`${item.linkUri}`}>{item.text}</Link>
      </li>
    );
  }

  render() {
    return (
      <div className="header">
        <div className="header__nav">
          <div className="header__title">
            <Link to='/'>{siteName}</Link>
          </div>
          {/* <button className="menu">
          <i className="menu__button fa fa-bars" aria-hidden="true" type="button" />
        </button> */}
        <div className="header__items">
          {navItems.map( navItem => this.loadNavItems(navItem))}
        </div>
        </div>
      </div>
    )
  };
}

HeaderComponent.displayName = 'Header';
export default HeaderComponent;
