import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{group.category}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;