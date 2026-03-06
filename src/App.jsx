import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MyWorks from './components/MyWorks';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import resumeFile from './assets/images/Greshma.Allu_Resume.jpg';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="app">
      <AnimatedBackground />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <About />
      <Skills />
      <MyWorks />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeFile={resumeFile}
      />
    </div>
  );
}

export default App;
