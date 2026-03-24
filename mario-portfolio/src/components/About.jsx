import React from 'react';
import { aboutData } from '../data/aboutData';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-3/5 space-y-4 text-gray-300 text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Hi, I'm {aboutData.personalInfo.name.split(' ')[0]}.
            </h3>
            {aboutData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="pt-6 flex gap-4">
              <a 
                href={`mailto:${aboutData.personalInfo.email}`} 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition font-medium"
              >
                Email Me
              </a>
              <a 
                href={aboutData.personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-800 text-white border border-gray-700 px-6 py-2 rounded-md hover:bg-gray-700 transition font-medium"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="md:w-2/5 space-y-8">
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🎓</span> Education
              </h3>
              <div>
                <h4 className="font-semibold text-lg text-blue-400">{aboutData.education.institution}</h4>
                <p className="text-gray-300 font-medium">{aboutData.education.degree}</p>
                <p className="text-gray-400 text-sm mt-1">{aboutData.education.date}</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🏆</span> Certifications
              </h3>
              <ul className="space-y-3">
                {aboutData.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-2 mt-1">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;