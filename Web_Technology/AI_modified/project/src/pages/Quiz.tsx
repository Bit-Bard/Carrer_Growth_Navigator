import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import QuizQuestion from '../components/quiz/QuizQuestion';
import ProgressBar from '../components/quiz/ProgressBar';
import EmailCapture from '../components/quiz/EmailCapture';
import { useQuiz } from '../context/QuizContext';
import { quizQuestions } from '../data/quizData';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentQuestion, 
    answers, 
    nextQuestion, 
    prevQuestion, 
    progress, 
    isComplete,
    email
  } = useQuiz();

  const question = quizQuestions[currentQuestion];
  const hasAnsweredCurrent = answers[currentQuestion] !== undefined;
  const showEmailCapture = progress > 70;

  const handleSubmit = () => {
    if (isComplete) {
      navigate('/results');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestion]);

  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container-custom max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Career Path Quiz</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Answer questions about your personality, skills, and interests to discover your ideal career path.
            </p>
            
            <ProgressBar progress={progress} />
            <p className="text-sm font-medium">{progress}% Complete</p>
          </div>
          
          <QuizQuestion question={question} />
          
          <div className="mt-6 flex justify-between">
            <button 
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="btn btn-outline flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Previous
            </button>
            
            {currentQuestion < quizQuestions.length - 1 ? (
              <button 
                onClick={nextQuestion}
                disabled={!hasAnsweredCurrent}
                className="btn btn-primary flex items-center"
              >
                Next
                <ArrowRight size={18} className="ml-2" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={!isComplete}
                className="btn btn-primary flex items-center"
              >
                View Results
                <Check size={18} className="ml-2" />
              </button>
            )}
          </div>
          
          {showEmailCapture && <EmailCapture />}
          
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Your answers are used to provide personalized career recommendations.</p>
            <p>This quiz is for guidance purposes and not a definitive assessment.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;