import './Card.css';
import Headshot from '../../_Assets/ProfileImages/me-headshot.png';
import Divider from '../Divider/Divider';

const Card = () => {
  return (
    <div className='card-container'>
      <img
        className='card-img'
        src={Headshot}
        alt='Full Stack Developer, Eric Dollinger'
      />
      <Divider />
      <div className='card-social-container'></div>
    </div>
  );
};

export default Card;
