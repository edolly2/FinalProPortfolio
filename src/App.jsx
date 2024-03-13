// import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './_layout/PageLayout/PageLayout';
import HomePage from '../src/_Pages/HomePage/HomePage';
import ContactPage from '../src/_Pages/ContactPage/ContactPage';
import AboutPage from '../src/_Pages/AboutPage/AboutPage';
import SkillsPage from '../src/_Pages/SkillsPage/SkillsPage';
import ProjectsPage from '../src/_Pages/ProjectsPage/ProjectsPage';
import AllWebsitesPage from '../src/_Pages/AllWebsitesPage/AllWebsitesPage';
import NotFoundPage from '../src/_Pages/NotFoundPage/NotFoundPage';

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
