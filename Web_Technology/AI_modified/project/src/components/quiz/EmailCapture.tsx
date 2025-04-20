import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';

const EmailCapture: React.FC = () => {
  const { email, setEmail } = useQuiz();
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const validateEmail = (email: string) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="card p-6 mt-4 animate-fade-in">
      <h3 className="text-xl font-semibold mb-4">Save Your Results</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Enter your email to save your results and receive personalized career advice.
      </p>
      
      <div className="space-y-2">
        <input 
          type="email" 
          value={email} 
          onChange={handleChange}
          placeholder="you@example.com" 
          className="input w-full"
        />
        {error && <p className="text-error text-sm">{error}</p>}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          We'll never share your email with anyone else.
        </p>
      </div>
    </div>
  );
};

export default EmailCapture;