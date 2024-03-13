import './NotFoundPage.css';
import PageContent from '../../_layout/PageContent/PageContent';
import PageTitle from '../../_layout/PageTitle/PageTitle';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <PageContent>
      <PageTitle title='Where are you going?' />
      <h1>404 Page Not Found</h1>
      <div>
        Please return to the <NavLink to='/'>home page</NavLink>
      </div>
    </PageContent>
  );
};

export default NotFoundPage;
