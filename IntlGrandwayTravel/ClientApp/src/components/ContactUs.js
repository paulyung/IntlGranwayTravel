import React, { Component } from 'react';
import './myStyles.css';
export default class ContactUs extends Component {
  render() {
      return (
          <div className="section" style={{ marginLeft: '20%', marginRight:'20%' }}>
            <div className="w-container">
                <h1 className="heading-10">Contact Us</h1>
                <div className="divider grey"></div>
                <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b68a8d60512e9be42b5738d_connie%20y.png" width="84" alt="" className="profile-image">
                </img>
                <div className="text-block">International Grandway is your One-Stop Travel Agency</div>
                <p className="paragraph-64">
                    We were established in 1981 by Ms. Connie Yung, who has brought her 30 years of experience in both the airline and travel industries to help in fulfilling your travel needs both here in the US and abroad. Grandway Travel is one of only a few selected agents to be chosen as a successful business tour operator to both the Tourism Authority of Thailand and Thailand Trade Center. In addition to providing for the needs of the individual traveler, we also offer custom itinerary tour packages for any size group. Our past tours have included special golfing, scuba diving, cruises, gourmet food, and shopping tours. In addition, our business travel section can arrange incentive, group convention, and business meeting travel - all at "local" insider prices far below what other agencies can offer. In the dynamic and ever-changing travel business, you need a professional and reliable agent to stay on top of your travel concerns. Our friendly and experienced travel consultants are always there for you to assist you with your travel needs. <br />
                    <br />
                    Please call us at (626) 577-7277 with any inquires or you may email us at <a href="mailto:intlgrandway@yahoo.com">intlgrandway@yahoo.com</a>.
      </p>
              </div>
              <div className="container-4 w-container">
                  <div className="section-title-group">
                      <h2 className="section-heading centered">Contact Form</h2>
                      <div className="divider grey"></div>
                      <div className="section-subheading center">Please contact us for more information about our services and tour packages. We will kindly get back to you. </div>
                  </div>
                  <div className="form-wrapper squeezed w-form" style={{ marginLeft: '30%' }}>
                      <form id="email-form" name="email-form" data-name="Email Form">
                          <label htmlFor="name" className="form-label">Name:</label>
                          <br/>
                          <input type="text" id="name" name="name" data-name="Name" placeholder="Eg. Jen Smith" maxLength="256" className="form-field w-input" style={{ marginLeft: '0%' }}></input>
                          <br />
                          <label htmlFor="Phone-Number" className="form-label">Phone Number:</label>
                          <br />
                          <input type="text" id="Phone-Number" name="Phone-Number" data-name="Phone Number" required="" maxLength="256" placeholder="(xxx) xxx-xxxx" className="form-field w-input"></input>
                          <br />
                          <label htmlFor="Email" className="form-label">Email Address:</label>

                          <br /><input type="email" id="Email" name="Email" data-name="Email" placeholder="intlgrandway@yahoo.com" maxLength="256" required="" className="form-field w-input"></input>
                          <br />
                          <label htmlFor="field" className="form-label">MESSAGE:</label>
                          <br />
                          <textarea id="field" name="field" placeholder="I would like to know..." maxLength="5000" required="" data-name="Field" className="form-field text-area w-input"></textarea>
                          <br />
                          <input  type="submit" value="Send Message" data-wait="Please wait..." className="button full-width"></input>
                      </form>
                      <div className="success-wrapper w-form-done">
                          <p className="success-message">Thank you! Your submission has been received!</p>
                      </div>
                      <div className="error-wrapper w-form-fail">
                          <p className="error-message">Oops! Something went wrong while submitting the form :(</p>
                      </div>
                  </div>
              </div>
        </div>
    )
  }
}
