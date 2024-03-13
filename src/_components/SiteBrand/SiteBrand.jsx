import './SiteBrand.css';
import Logo from '../../_assets/Logo/my-logo.png';
import { Link } from 'react-router-dom';

const SiteBrand = (props) => {
  return (
    <div className='site-brand-container'>
      <Link className='site-brand-link' to='/'>
        <img
          className='site-brand-logo'
          src={Logo}
          alt='Logo with the letters E and D'
        />
      </Link>
    </div>
  );
};

export default SiteBrand;
