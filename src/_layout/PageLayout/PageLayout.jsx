import Footer from '../../_Components/Footer/Footer';
import Header from '../../_Components/Header/Header';
import './PageLayout.css';

const PageLayout = ({ children }) => {
  return (
    <div className='page-layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
