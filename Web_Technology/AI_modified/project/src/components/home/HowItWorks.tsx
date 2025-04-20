import React from 'react';
import { ClipboardList, BarChart, Lightbulb, User } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
      title: 'Take the Career Quiz',
      description: 'Answer questions about your personality, skills, interests, and goals. The quiz takes about 5 minutes to complete.'
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: 'Get Your Analysis',
      description: 'Our algorithm analyzes your answers to determine your ideal career paths based on your unique profile.'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Explore Career Options',
      description: 'Discover detailed information about your top career matches, including required skills, education, and resources.'
    },
    {
      icon: <User className="h-10 w-10 text-primary" />,
      title: 'Plan Your Next Steps',
      description: 'Get actionable guidance on how to start or advance in your chosen career path with a personalized roadmap.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our career assessment tool uses a comprehensive approach to help you discover your ideal career path.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;