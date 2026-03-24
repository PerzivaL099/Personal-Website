import React from 'react';
import { experienceData } from '../data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Experience & Freelance</h2>
        
        <div className="space-y-8">
          {experienceData.map((job) => (
            <div key={job.id} className="border-l-4 border-blue-500 pl-6 py-2">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  <p className="text-lg text-gray-400 font-medium">{job.company}</p>
                </div>
                <span className="text-sm font-semibold text-gray-300 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full">
                  {job.date}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{job.description}</p>
              
              <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-800 text-blue-400 border border-gray-700 text-xs font-semibold px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;