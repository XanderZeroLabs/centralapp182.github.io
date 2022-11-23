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
                    <span>Su dinero siempre en sus manos</span>
                    <h1>Descargue su apps</h1>
                    <p>
                      El mejor beneficio, los costes mas economicos, una comunidad solida y la mejor plataforma de respaldo convierte a {constants.appName} la mejor opcion.
                    </p>
                  </div>
                  <ul className='d-flex flex-wrap justify-content-center'>
                    <li className='m-1'>
                      <a href='https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=es_PE&gl=US&pli=1'>
                        <img
                          src='assets/img/hero/download-1.svg'
                          alt='play store'
                        />
                      </a>
                    </li>
                    <li className='m-1'>
                      <a href='https://www.metatrader5.com/'>
                        <img
                          src='assets/img/hero/download-2.svg'
                          alt='app store'
                        />
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
                  <h3>El FUTURO que quieres</h3>
                  <p>
                    {/* Te ofrecemos excelentes opciones, herramientas y guias para ayudarte a planificar un mejor futuro para ti y los que amas. */}
                    Una simple decisión puede mejorar tu vida, creando un futuro mejor para ti y los que amas.
                  </p>
                </div>
              </div>
              <div
                className='col-xl-2 col-lg-2 col-md-4 col-sm-6 offset-md-2 offset-lg-0'
              >
                <div className='footer-widget'>
                  <h6>Products</h6>
                  <ul className='links'>
                    <li><a href='#0'>Caracteristicas</a></li>
                    <li><a href='#0'>Planes</a></li>
                    <li><a href='#0'>Precios</a></li>
                    <li><a href='#0'>Seguridad</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                <div className='footer-widget'>
                  <h6>Company</h6>
                  <ul className='links'>
                    <li><a href='#0'>Sobre Nosotros</a></li>
                    <li><a href='#0'>Prensa & Medios</a></li>
                    <li><a href='#0'>Carrera</a></li>
                    <li><a href='#0'>Embajadores</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                <div className='footer-widget'>
                  <h6>Support</h6>
                  <ul className='links'>
                    <li><a href='#0'>Preguntas Frecuentse</a></li>
                    <li><a href='#0'>Terminos & Condiciones</a></li>
                    <li><a href='#0'>Politicas de Privacidad</a></li>
                    <li><a href='#0'>Historias de Clientes</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
                <div className='footer-widget'>
                  <h6>Cantacto</h6>
                  <ul className='links'>
                    <li><a href='#0'>Soporte@Central.com</a></li>
                    <li><a href='#0'>+591 903 0000 857</a></li>
                  </ul>
                  <h6 className='mt-20'>Siguenos</h6>
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
              Desarrollado por
              <a rel='nofollow' href='{constants.webDev}'>&nbsp; {constants.devName}</a>
              &nbsp; para
              <a rel='nofollow' href='{constants.webApp}'>&nbsp; {constants.appName}</a>
            </p>
          </div>
        </div>
      </div>
    </footer> 
  );
}

export default Footer;