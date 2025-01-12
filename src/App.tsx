import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CADTraining } from './pages/CADTraining';
import { EmbeddedTraining } from './pages/EmbeddedTraining';
import { ProjectDetails } from './pages/ProjectDetails';
import { Training } from './pages/Training';
import { Register } from './pages/Register';

function App() {
  const location = useLocation();

  // Smooth scrolling to section when navigating to a hash
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/training" element={<Training />} />
      <Route path="/training/cad" element={<CADTraining />} />
      <Route path="/training/embedded" element={<EmbeddedTraining />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;