import React from 'react';
import constants from '../../core/js/constants';

function Footer() {
  return (
    <footer id='footer' className='footer'>
      <div className='container'>
        <div className='cta-section pt-120'>
          <div className='cta-wrapper'>
            <div className='row justify-content-center'>
              <div className='col-xl-6 col-lg-8'>
                <div className='cta-content-wrapper'>
                  <div className='section-title text-center mb-30'>
                    <span>Save Your Money</span>
                    <h1>Get Our Apps</h1>
                    <p>
                      With impressive interest rates, an app, tools & guides, to
                      plan, save & invest, Appify is the smartest way.
                    </p>
                  </div>
                  <ul className='d-flex flex-wrap justify-content-center'>
                    <li className='m-1'>
                      <a href='#0'>
                        <img
                          src='assets/img/hero/download-1.svg'
                          alt='play store'
                        />
                      </a>
                    </li>
                    <li className='m-1'>
                      <a href='#0'>
                        <img src='assets/img/hero/download-2.svg' alt='app store' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-content'>
        <div className='container'>
          <div className='widget-wrapper'>
            <div className='row'>
              <div className='col-xl-4 col-lg-3 col-md-6'>
                <div className='footer-widget widget-info'>
                  <div className='logo'>
                    <a href='#0'>
                      <img src='assets/img/logo/logo-2.svg' alt='logo' />
                    </a>
                  </div>
                  <h3>Get the future you want</h3>
                  <p>
                    We offer great advice, tools and guides to help you plan your
                    best future for free.
                  </p>
                </div>
              </div>
              <div
                className='col-xl-2 col-lg-2 col-md-4 col-sm-6 offset-md-2 offset-lg-0'
              >
                <div className='footer-widget'>
                  <h6>Products</h6>
                  <ul className='links'>
                    <li><a href='#0'>Features</a></li>
                    <li><a href='#0'>Templates</a></li>
                    <li><a href='#0'>Pricing</a></li>
                    <li><a href='#0'>Security</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                <div className='footer-widget'>
                  <h6>Company</h6>
                  <ul className='links'>
                    <li><a href='#0'>About Us</a></li>
                    <li><a href='#0'>Press & Media</a></li>
                    <li><a href='#0'>Careers</a></li>
                    <li><a href='#0'>Ambassadors</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                <div className='footer-widget'>
                  <h6>Support</h6>
                  <ul className='links'>
                    <li><a href='#0'>FAQ</a></li>
                    <li><a href='#0'>Terms & Conditions</a></li>
                    <li><a href='#0'>Privacy Policy</a></li>
                    <li><a href='#0'>Customer Stories</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
                <div className='footer-widget'>
                  <h6>Connect</h6>
                  <ul className='links'>
                    <li><a href='#0'>support@pagebulb.com</a></li>
                    <li><a href='#0'>+234 903 0000 857</a></li>
                  </ul>
                  <h6 className='mt-20'>Follow Us</h6>
                  <ul className='socials'>
                    <li>
                      <a href='#0'><i className='lni lni-twitter-filled'></i></a>
                    </li>
                    <li>
                      <a href='#0'><i className='lni lni-facebook'></i></a>
                    </li>
                    <li>
                      <a href='#0'><i className='lni lni-linkedin-original'></i></a>
                    </li>
                    <li>
                      <a href='#0'><i className='lni lni-envelope'></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='copyright-wrapper'>
            <p>
              by
              <a rel='nofollow' href='{webDev}'>&nbsp; {constants.dev}</a> para
              <a rel='nofollow' href='https://afina.io'>&nbsp; {constants.site}</a>
            </p>
          </div>
        </div>
      </div>
    </footer> 
  );
}

export default Footer;