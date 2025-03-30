import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Achievements from './components/Achievements';


function App() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Achievements />
      <ProjectsSection />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  )
}

export default App;