import React from 'react';
import constants from '../../core/js/constants';

function Feature() {
  return (
    <section className="feature-section-2 pt-65">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-lg-6 order-last order-lg-first">
            <div className="feature-content-wrapper">
              <div className="section-title mb-50">
                <h1>Start building wealth easily in 5 minutes</h1>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon -rotate-90">
                  <i className="lni lni-users"></i>
                </div>
                <div className="content">
                  <h4>Create an account</h4>
                  <p>
                    Sign up for an account with your name, email and phone
                    number.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon">
                  <i className="lni lni-bolt"></i>
                </div>
                <div className="content">
                  <h4>Add a payment method</h4>
                  <p>
                    Using your debit card, bank account, USSD, QR Code, setup
                    your first plan.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon -rotate-90">
                  <i className="lni lni-crown"></i>
                </div>
                <div className="content">
                  <h4>Watch your money grow</h4>
                  <p>
                    Sit back, relax & let your money work for you all day,
                    everyday.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6 offset-xxl-1">
            <div className="feature-image-2">
              <img src="assets/img/features/feature-2.svg" alt="feature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;