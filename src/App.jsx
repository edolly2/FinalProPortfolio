// import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './_layout/PageLayout/PageLayout';
import HomePage from './_pages/HomePage/HomePage';
import ContactPage from './_pages/ContactPage/ContactPage';
import AboutPage from './_pages/AboutPage/AboutPage';
import SkillsPage from './_pages/SkillsPage/SkillsPage';
import ProjectsPage from './_pages/ProjectsPage/ProjectsPage';
import AllWebsitesPage from './_pages/AllWebsitesPage/AllWebsitesPage';
import NotFoundPage from './_pages/NotFoundPage/NotFoundPage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <PageLayout>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/all-websites' element={<AllWebsitesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
