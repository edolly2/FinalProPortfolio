import './AboutPage.css';
import AboutImg from '../../_Assets/ProfileImages/me-pose.png';
import PageContent from '../../_Layout/PageContent/PageContent';
import PageTitle from '../../_Layout/PageTitle/PageTitle';
import { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [showMoreActive, setShowMoreActive] = useState(false);

  return (
    <PageContent>
      <PageTitle title='About Me' />
      <div className='ap-container'>
        <div className='ap-img-container'>
          <img className='ap-img' src={AboutImg} alt='Daper Eric Dollinger' />
        </div>
        <div className='ap-info-container'>
          <h2 className='ap-info-title'>
            <span className='primary'>{'//'}</span> Who Am I?
          </h2>
          <div className='ap-info-content'>
            <p>
              I am Eric Dollinger, a seasoned 32-year-old Web Developer hailing
              from Omaha, Nebraska. My expertise predominantly lies in Front End
              development, with a primary focus on ReactJS. However, my
              proficiency extends across various Back End technologies,
              languages, frameworks, and libraries. I bring a comprehensive
              skill set and a commitment to delivering high-quality solutions in
              the realm of web development.
            </p>
            <div
              className='show-more-container'
              style={{ display: showMoreActive ? 'block' : 'none' }}
            >
              <br />
              <p>
                My journey in Web Development began as a personal hobby,
                primarily self-taught. As my passion evolved into a career
                pursuit, I proactively engaged in formal education, pursued
                certifications, tackled industry challenges, and actively sought
                mentorship from leading developers. This deliberate approach has
                not only honed my skills but also instilled in me a deep
                commitment to excellence and continuous growth in the
                ever-evolving landscape of technology.
              </p>
              <br />
              <p>
                I successfully concluded my studies from Nucamp with honors and
                have acquired numerous certifications, which can be viewed on my{' '}
                <Link to='https://www.linkedin.com/in/eric-dollinger/'>
                  LinkedIn
                </Link>{' '}
                profile. With approximately 5-6 years of professional
                experience, I maintain a commitment to continuous learning,
                ensuring that I remain abreast of the latest best practices,
                trends, and industry standards. I invite you to delve deeper
                into my portfolio to explore a showcase of my projects and
                skillset.
              </p>
              <br />
              <p>
                Thank you for dedicating your time to explore my portfolio.
                Should you have any inquiries or feedback, I invite you to visit
                my <Link to={'/contact'}>contact</Link> page and reach out to me
                directly. Your interest and engagement are sincerely valued.
                Thank you for your consideration.
              </p>
            </div>
            <span
              style={{ display: !showMoreActive ? 'flex' : 'none' }}
              onClick={() => {
                setShowMoreActive(true);
              }}
            >
              Show More
              <BsFillCaretDownFill className='show-icon' />
            </span>
            <span
              style={{ display: showMoreActive ? 'flex' : 'none' }}
              onClick={() => {
                setShowMoreActive(false);
              }}
            >
              Show Less
              <BsFillCaretUpFill className='show-icon' />
            </span>
          </div>
        </div>
      </div>
    </PageContent>
  );
};

export default AboutPage;
