import Footer from '../../_components/Footer/Footer';
import Header from '../../_components/Header/Header';
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
