import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Ideal Career Path?</h2>
            <p className="text-xl mb-8 text-white/90">
              Take our comprehensive career quiz and get personalized guidance on your professional journey.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-white" />
                <span>Personalized career recommendations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-white" />
                <span>Actionable steps to start your journey</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-white" />
                <span>Resources for your top career matches</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-white" />
                <span>Free downloadable career roadmap</span>
              </li>
            </ul>
            
            <Link 
              to="/quiz" 
              className="btn bg-white text-primary hover:bg-gray-100 btn-lg group inline-flex"
            >
              Take the Quiz Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-primary text-2xl font-bold mb-4">
                ?
              </div>
              <h3 className="text-2xl font-semibold mb-2">Quick Stats</h3>
              <p className="text-white/90">From our career quiz takers:</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">89%</div>
                <p className="text-sm text-white/80">Found their ideal career match</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">75%</div>
                <p className="text-sm text-white/80">Started a new career path</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">94%</div>
                <p className="text-sm text-white/80">Recommend our career quiz</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">5 min</div>
                <p className="text-sm text-white/80">Average completion time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;