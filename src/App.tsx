import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './contexts/ContentContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Badges } from './components/Badges';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { AdminPanel } from './components/admin/AdminPanel';
import { useLoading } from './hooks/useLoading';
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';

function MainPortfolio() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Badges />
        <Experience />
        <Education />
        <Languages />
        <Contact />
        <Footer />
        <ScrollToTop />
        <Analytics />
      </div>
    </>
  );
}

function App() {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/salam-admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </ContentProvider>
  );
}

export default App;