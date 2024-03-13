import './Button.css';

const Button = ({ text, disabled, onClick }) => {
  return (
    <button className='btn' disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
