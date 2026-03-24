import React from 'react';
import { aboutData } from './data/aboutData';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Column: Bio */}
          <div className="md:w-3/5 space-y-4 text-gray-700 text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hi, I'm {aboutData.personalInfo.name.split(' ')[0]}.
            </h3>
            {aboutData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            {/* Quick Links */}
            <div className="pt-6 flex gap-4">
              <a 
                href={`mailto:${aboutData.personalInfo.email}`} 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium"
              >
                Email Me
              </a>
              <a 
                href={aboutData.personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition font-medium"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="md:w-2/5 space-y-8">
            
            {/* Education Block */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🎓</span> Education
              </h3>
              <div>
                <h4 className="font-semibold text-lg text-blue-600">{aboutData.education.institution}</h4>
                <p className="text-gray-700 font-medium">{aboutData.education.degree}</p>
                <p className="text-gray-500 text-sm mt-1">{aboutData.education.date}</p>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🏆</span> Certifications
              </h3>
              <ul className="space-y-3">
                {aboutData.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-blue-500 mr-2 mt-1">✓</span>
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