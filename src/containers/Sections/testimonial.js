import React from 'react';
import constants from '../../core/js/constants';

function Testimonial() {
  return (
    <section id="testimonials" className="testimonial-section gray-bg-1 pt-120 pb-185">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial-active-wrapper">
              <div className="section-title mb-65">
                <h1>What Users Say</h1>
              </div>
              <div className="testimonial-active">
                <div className="single-testimonial">
                  <div className="content">
                    <p>
                      “Since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.”
                    </p>
                  </div>
                  <div className="info">
                    <div className="image mb-10"></div>
                    <h6>Musharof Chowdhury</h6>
                    <p>CEO, PageBulb</p>
                  </div>
                  <div className="video-btn">
                    <a href="#0"> More Stories </a>
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="content">
                    <p>
                      “Money Blub has provided us with a powerful, scalable
                      platform, marketplace and a highly capable partner network.”
                    </p>
                  </div>
                  <div className="info">
                    <div className="image mb-10"></div>
                    <h6>Edward Popoola</h6>
                    <p>CEO, UIdeck</p>
                  </div>
                  <div className="video-btn">
                    <a href="#0"> More Stories </a>
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="content">
                    <p>
                      “Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.”
                    </p>
                  </div>
                  <div className="info">
                    <div className="image mb-10"></div>
                    <h6>Shadab</h6>
                    <p>CEO, UIdeck</p>
                  </div>
                  <div className="video-btn">
                    <a href="#0"> More Stories </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-image">
        <img src="assets/img/testimonial/testimonial-1.png" alt="" />
      </div>
    </section>
  );
}

export default Testimonial;
