import React, { Component } from 'react';

class EmailComponent extends Component {
  render() {
    return(
      <div className="email contain">
        <a href="mailto:cjdeleon215@gmail.com">
          Send me an email
          <i className="far fa-envelope" />
        </a>
      </div>
    );
  }
}

EmailComponent.displayName = 'Email';
export default EmailComponent;