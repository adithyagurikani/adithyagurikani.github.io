import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';
import GenerativeBackground from './components/GenerativeBackground';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app">
      <GenerativeBackground />
      <BackgroundElements />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="divider">
          <div className="divider-dot"></div>
        </div>
        <About />
        <div className="divider">
          <div className="divider-dot"></div>
        </div>
        <Projects />
        <div className="divider">
          <div className="divider-dot"></div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
