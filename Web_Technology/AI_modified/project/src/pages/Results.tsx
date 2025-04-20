import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CareerCard from '../components/results/CareerCard';
import ActionSteps from '../components/results/ActionSteps';
import { useQuiz } from '../context/QuizContext';
import { Share2, RotateCcw, Mail } from 'lucide-react';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { getResults, resetQuiz, progress, email } = useQuiz();
  
  const results = getResults();
  
  // Redirect if the quiz hasn't been completed
  useEffect(() => {
    if (progress < 100) {
      navigate('/quiz');
    }
    window.scrollTo(0, 0);
  }, [progress, navigate]);

  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/quiz');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Career Path Results',
        text: `I discovered my ideal career path is ${results[0]?.title}!`,
        url: window.location.href,
      });
    } else {
      alert('Sharing is not supported in your browser');
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Career Path Results</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Based on your quiz answers, we've identified the following career paths that best match your personality, skills, and interests.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={handleRetakeQuiz}
                className="btn btn-outline flex items-center"
              >
                <RotateCcw size={16} className="mr-2" />
                Retake Quiz
              </button>
              <button 
                onClick={handleShare}
                className="btn btn-outline flex items-center"
              >
                <Share2 size={16} className="mr-2" />
                Share Results
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {results.map((career, index) => (
              <CareerCard key={career.id} career={career} rank={index + 1} />
            ))}
          </div>
          
          <ActionSteps careers={results} />
          
          {email && (
            <div className="card p-6 mt-6 text-center animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <Mail size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Results Sent to Your Email</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                We've sent a copy of your results to {email}. Check your inbox for a detailed career roadmap!
              </p>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">What's Next?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Your career journey is just beginning. Use the resources and action steps above to start building your future.
            </p>
            <button className="btn btn-primary">
              Start Building Your Career Plan Today
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;