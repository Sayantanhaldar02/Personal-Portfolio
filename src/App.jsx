import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, BlogPage, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';
import { ThemeContext } from './contexts/ThemeContext';
import './App.css'
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/blog" exact element={<BlogPage/>} />
        <Route path="/projects" exact element={<ProjectPage/>} />
      </Routes>
      <BackToTop />
    </>
  )
}

export default App