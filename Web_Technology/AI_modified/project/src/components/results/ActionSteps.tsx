import React from 'react';
import { Download, FileText, BookOpen, Users, Target } from 'lucide-react';
import { CareerResult } from '../../data/careerData';

interface ActionStepsProps {
  careers: CareerResult[];
}

const ActionSteps: React.FC<ActionStepsProps> = ({ careers }) => {
  const topCareer = careers[0];

  const generatePDF = () => {
    alert('PDF roadmap would be generated in a real app. This feature is simulated in this demo.');
  };

  return (
    <div className="card p-6 mt-6 animate-fade-in">
      <h3 className="text-xl font-semibold mb-4">
        Next Steps for Your {topCareer?.title} Journey
      </h3>
      
      <ol className="space-y-6 mt-6">
        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
            1
          </div>
          <div>
            <h4 className="font-semibold text-lg">Build Your Knowledge Foundation</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Start with a fundamental course like {topCareer?.resources.courses[0].title}. 
              This will give you a solid understanding of basic concepts.
            </p>
          </div>
        </li>
        
        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
            2
          </div>
          <div>
            <h4 className="font-semibold text-lg">Join Professional Communities</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Connect with professionals in {topCareer?.title} through communities like {topCareer?.resources.communities[0].name}. 
              Networking is key to finding opportunities.
            </p>
          </div>
        </li>
        
        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
            3
          </div>
          <div>
            <h4 className="font-semibold text-lg">Build Your Portfolio</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Create practical projects that showcase your skills. For {topCareer?.title}, 
              this might include {topCareer?.id === 'software-engineering' ? 'building applications' : 
                topCareer?.id === 'data-science' ? 'analyzing datasets' : 
                topCareer?.id === 'marketing' ? 'creating marketing campaigns' : 'practical projects'}.
            </p>
          </div>
        </li>
        
        <li className="flex">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
            4
          </div>
          <div>
            <h4 className="font-semibold text-lg">Apply for Entry-Level Positions</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Start looking for internships or entry-level positions on job boards like {topCareer?.jobBoards[0].name}. 
              Focus on opportunities that will help you build relevant experience.
            </p>
          </div>
        </li>
      </ol>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button 
          onClick={generatePDF}
          className="btn btn-primary flex items-center justify-center"
        >
          <Download size={18} className="mr-2" />
          Download Career Roadmap
        </button>
        
        <button className="btn btn-outline flex items-center justify-center">
          <FileText size={18} className="mr-2" />
          Save Results
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="flex items-start space-x-3">
          <BookOpen size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Continuous Learning</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Keep updating your skills with the latest trends and technologies in {topCareer?.title}.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Users size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Mentorship</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Find a mentor who can guide you through your career journey in {topCareer?.title}.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Target size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Set Clear Goals</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Define short-term and long-term career goals to stay focused and motivated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionSteps;