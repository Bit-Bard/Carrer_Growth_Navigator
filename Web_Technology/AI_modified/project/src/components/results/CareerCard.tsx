import React, { useState } from 'react';
import { CareerResult } from '../../data/careerData';
import { ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';

interface CareerCardProps {
  career: CareerResult;
  rank: number;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, rank }) => {
  const [isExpanded, setIsExpanded] = useState(rank === 1);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card overflow-hidden border ${rank === 1 ? 'border-primary' : 'border-gray-200 dark:border-gray-700'} animate-fade-in transition-all duration-300`}>
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center">
              {rank === 1 && (
                <div className="bg-primary text-white text-xs font-medium rounded px-2 py-1 mr-2">
                  Best Match
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-semibold">{career.title}</h3>
            </div>
            <div className="flex items-center mt-2">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${career.match}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium ml-2">{career.match}% match</span>
            </div>
          </div>
          <button 
            onClick={toggleExpand}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <p className="mt-3 text-gray-600 dark:text-gray-400">{career.description}</p>

        {isExpanded && (
          <div className="mt-4 animate-slide-in">
            <h4 className="font-semibold text-base mb-2">Key Skills</h4>
            <ul className="space-y-1 mb-4">
              {career.skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <Check size={16} className="text-success mt-1 mr-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-base mb-2">Educational Pathways</h4>
            <ul className="space-y-1 mb-4">
              {career.education.map((edu, index) => (
                <li key={index} className="flex items-start">
                  <Check size={16} className="text-success mt-1 mr-2 flex-shrink-0" />
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-base mb-2">Recommended Resources</h4>
            <div className="mb-4">
              <h5 className="font-medium text-sm mb-1">Courses:</h5>
              <ul className="space-y-1 mb-2">
                {career.resources.courses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <a 
                      href={course.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>

              <h5 className="font-medium text-sm mb-1">Communities:</h5>
              <ul className="space-y-1 mb-2">
                {career.resources.communities.map((community, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <a 
                      href={community.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {community.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <h4 className="font-semibold text-base mb-2">Job Boards</h4>
            <ul className="space-y-1 mb-4">
              {career.jobBoards.map((board, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <a 
                    href={board.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {board.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 text-right">
        <button 
          onClick={toggleExpand} 
          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center justify-center mx-auto"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} className="mr-1" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown size={16} className="mr-1" /> Show More
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CareerCard;