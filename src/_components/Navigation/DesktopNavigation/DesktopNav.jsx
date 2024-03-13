import '../GlobalNavigation.css';
import './DesktopNav.css';
import { NavLink } from 'react-router-dom';
import Button from '../../Button/Button';

const DesktopNav = (props) => {
  return (
    <nav className='nav-container'>
      <ul className='desk-nav-list'>
        <li className='nav-list-item'>
          <NavLink
            className='nav-link'
            // style={{ marginLeft: '2.4rem' }}
            onClick={props.onNavLinkClick}
            to='/'
          >
            HOME
          </NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink
            className='nav-link'
            onClick={props.onNavLinkClick}
            to='/about'
          >
            ABOUT
          </NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink
            className='nav-link'
            onClick={props.onNavLinkClick}
            to='/skills'
          >
            SKILLS
          </NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink
            className='nav-link'
            onClick={props.onNavLinkClick}
            to='/projects'
          >
            PROJECTS
          </NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink
            className='nav-link'
            onClick={props.onNavLinkClick}
            to='/contact'
          >
            CONTACT
          </NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink
            className='nav-link'
            onClick={props.onNavLinkClick}
            to='/blog'
          >
            <Button text='Hire Me' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
