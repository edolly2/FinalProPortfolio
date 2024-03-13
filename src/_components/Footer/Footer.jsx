import './Footer.css';
import SiteBrand from '../../_components/SiteBrand/SiteBrand';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-container'>
      <div className='footer-header-container'>
        <SiteBrand />
        <h2 className='footer-title'>
          <span className='primary'>&lt;</span> THANKS FOR VISITING{' '}
          <span className='primary'>/&gt;</span>
        </h2>
      </div>
      <Divider />
      <div className='footer-list-container'>
        <div className='footer-section'>
          <h5>
            <span className='primary'>{'//'}</span> SITE MAP
          </h5>
          <Divider />
          <ul className='footer-list'>
            <li className='nav-list-item footer-list-item'>
              <NavLink className='nav-link footer-link' to='/'>
                HOME
              </NavLink>
            </li>
            <li className='nav-list-item footer-list-item'>
              <NavLink className='nav-link footer-link' to='/about'>
                ABOUT
              </NavLink>
            </li>
            <li className='nav-list-item footer-list-item'>
              <NavLink className='nav-link footer-link' to='/skills'>
                SKILLS
              </NavLink>
            </li>
            <li className='nav-list-item footer-list-item'>
              <NavLink className='nav-link footer-link' to='/projects'>
                PROJECTS
              </NavLink>
            </li>
            <li className='nav-list-item footer-list-item'>
              <NavLink className='nav-link footer-link' to='/contact'>
                CONTACT
              </NavLink>
            </li>
            <li className='nav-list-item footer-list-item'>
              <NavLink className='nav-link footer-link' to='/blog'>
                <Button text='HIRE ME' />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h5>
            <span className='primary'>{'//'}</span> FOLLOW ME
          </h5>
          <Divider />
          <ul className='footer-list'>
            <div className='footer-social-group'>
              <li className='nav-list-item footer-list-item'>
                <a href='https://github.com/edolly2'>
                  <FaGithub className='icon' />
                </a>
              </li>
              <li className='nav-list-item footer-list-item'>
                <a href='https://www.linkedin.com/in/eric-dollinger/'>
                  <FaLinkedinIn className='icon' />
                </a>
              </li>
            </div>
            <div className='footer-social-group'>
              <li className='nav-list-item footer-list-item'>
                <a href='https://facebook.com/dev.dollinger/'>
                  <FaFacebook className='icon' />
                </a>
              </li>
              <li className='nav-list-item footer-list-item'>
                <a href='https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01'>
                  <FaTwitter className='icon' />
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className='footer-section'>
          <h5>
            <span className='primary'>{'//'}</span> GET IN TOUCH
          </h5>
          <Divider />
          <ul className='footer-list'>
            <li className='nav-list-item footer-list-item'>
              <NavLink className='nav-link footer-link' to='/contact'>
                CONTACT
              </NavLink>
            </li>
            <li className='nav-list-item footer-list-item'>EMAIL</li>
            <li className='nav-list-item footer-list-item'>ADDRESS</li>
            <li className='nav-list-item footer-list-item'>PHONE</li>
          </ul>
        </div>
        <div className='footer-section'>
          <h5>
            <span className='primary'>{'//'}</span> OTHER
          </h5>
          <Divider />
          <ul className='footer-list'>
            <li className='nav-list-item footer-list-item'>FAQ</li>
            <li className='nav-list-item footer-list-item'>SETTINGS</li>
            <li className='nav-list-item footer-list-item'>TERMS</li>
          </ul>
        </div>
      </div>
      <div className='copyright-container'>
        <small>
          <span className='secondary'>&copy;</span>Copyright {currentYear}{' '}
          <span className='primary'>
            <a className='copy-text' href='https://www.ericdolly.com'>
              www.EricDolly.com
            </a>
          </span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
