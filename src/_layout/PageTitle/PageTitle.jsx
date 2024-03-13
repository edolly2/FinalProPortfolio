import './PageTitle.css';

const PageTitle = ({ title }) => {
  return (
    <h1 className='page-title'>
      <span className='primary'>&lt;</span>{' '}
      <span className='secondary'>{title}</span>{' '}
      <span className='primary'>/&gt;</span>
    </h1>
  );
};

export default PageTitle;
