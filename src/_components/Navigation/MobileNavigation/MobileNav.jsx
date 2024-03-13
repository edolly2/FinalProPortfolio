import '../GlobalNavigation.css';
import './MobileNav.css';

import { CgMenuGridO } from 'react-icons/cg';

const MobileNav = (props) => {
  return (
    <div className='nav-container'>
      <CgMenuGridO className='icon menu-icon' onClick={props.onMenuClick} />
    </div>
  );
};

export default MobileNav;
