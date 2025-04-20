import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Home, RotateCcw } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="btn btn-primary flex items-center justify-center">
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <Link to="/quiz" className="btn btn-outline flex items-center justify-center">
            <RotateCcw size={18} className="mr-2" />
            Take the Quiz
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;