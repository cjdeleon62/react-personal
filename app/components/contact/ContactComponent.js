import React, { Component } from 'react';

class ContactComponent extends Component {
  render() {
    return(
      <div className="contact">
        <div className="contact__title">
          Contact Me
        </div>
        <div className="form__container">
          <form className="contact__form" action="www.google.com" method="post">
          <div className="fields__container">
            <div className="row">
              <div className="col-left">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="col-right">
                <input type="email" name="email" id="email" placeholder="Email" required/>
              </div>
            </div>
            <div className="row">
              <div className="col-left">
                <label htmlFor="firstName">First Name:</label>
              </div>
              <div className="col-right">
                <input type="text" name="firstName" id="firstName" placeholder="John" required/>
              </div>
            </div>
            <div className="row">
              <div className="col-left">
                <label htmlFor="lastName">Last Name:</label>
              </div>
              <div className="col-right">
                <input type="text" name="lastName" id="lastName" placeholder="Doe" required />
              </div>
            </div>
            <div className="row">
              <div className="col-left">
                <label htmlFor="phone">Phone:</label>
              </div>
              <div className="col-right">
                <input type="tel" name="phone" id="phone" placeholder="111-111-1111" required />
              </div>
            </div>
            <div className="row">
              <label className="message__label" htmlFor="message">Message</label>
              <textarea name="message" id="message"required></textarea>
            </div>
          </div>
        </form>

        </div>
      </div>
    )
  }
}

ContactComponent.displayName = 'Contact';
export default ContactComponent;