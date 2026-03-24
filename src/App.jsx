import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-400">Mario Estrada</div>
          <div className="space-x-6 hidden md:flex font-medium">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">Projects</a>
          </div>
        </div>
      </nav>

      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-4">Architected and built by Mario Estrada.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/PerzivaL099" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">GitHub</a>
            <a href="mailto:mario152003@gmail.com" className="hover:text-blue-400 transition">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;