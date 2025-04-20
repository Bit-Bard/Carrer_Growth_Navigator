import React, { createContext, useContext, useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { careerSuggestions, CareerResult } from '../data/careerData';

interface QuizContextType {
  currentQuestion: number;
  answers: Record<number, number>;
  setAnswer: (questionId: number, answerId: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  getResults: () => CareerResult[];
  resetQuiz: () => void;
  progress: number;
  isComplete: boolean;
  email: string;
  setEmail: (email: string) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState('');

  const totalQuestions = quizQuestions.length;

  const setAnswer = (questionId: number, answerId: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
  };

  const progress = Math.round(
    (Object.keys(answers).length / totalQuestions) * 100
  );

  const isComplete = Object.keys(answers).length === totalQuestions;

  // Algorithm to calculate career matches based on answers
  const getResults = (): CareerResult[] => {
    // Default scores for each career path
    const scores: Record<string, number> = {};
    
    // Initialize scores
    careerSuggestions.forEach(career => {
      scores[career.id] = 0;
    });
    
    // Calculate scores based on answers
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const question = quizQuestions.find(q => q.id === parseInt(questionId));
      if (!question) return;
      
      const answer = question.options[answerId];
      
      // Each answer affects certain career paths
      answer.affects.forEach(affect => {
        scores[affect.careerId] += affect.weight;
      });
    });
    
    // Convert to array and sort by score descending
    const results = careerSuggestions.map(career => ({
      ...career,
      score: scores[career.id] || 0,
      match: Math.min(Math.round((scores[career.id] / 100) * 100), 100) // Normalize to percentage with max 100%
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3); // Get top 3 matches
    
    return results;
  };

  return (
    <QuizContext.Provider 
      value={{ 
        currentQuestion, 
        answers, 
        setAnswer, 
        nextQuestion, 
        prevQuestion, 
        getResults, 
        resetQuiz, 
        progress, 
        isComplete,
        email,
        setEmail
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}