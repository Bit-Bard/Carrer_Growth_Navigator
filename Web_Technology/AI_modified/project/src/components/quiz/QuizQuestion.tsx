import React from 'react';
import { QuizQuestion as QuestionType } from '../../data/quizData';
import { useQuiz } from '../../context/QuizContext';

interface QuizQuestionProps {
  question: QuestionType;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question }) => {
  const { answers, setAnswer } = useQuiz();
  const selectedAnswer = answers[question.id];

  return (
    <div className="card p-6 animate-fade-in">
      <h3 className="text-xl mb-2 font-semibold">Question {question.id + 1}</h3>
      <p className="text-xl md:text-2xl font-medium mb-6">{question.text}</p>
      
      <div className="space-y-3 mt-4">
        {question.options.map((option) => (
          <div 
            key={option.id}
            className={`quiz-option ${selectedAnswer === option.id ? 'quiz-option-selected' : ''}`}
            onClick={() => setAnswer(question.id, option.id)}
          >
            <input
              type="radio"
              className="sr-only"
              name={`question-${question.id}`}
              id={`option-${question.id}-${option.id}`}
              checked={selectedAnswer === option.id}
              onChange={() => setAnswer(question.id, option.id)}
            />
            <div className="ml-2">
              <label 
                htmlFor={`option-${question.id}-${option.id}`}
                className="text-base md:text-lg cursor-pointer"
              >
                {option.text}
              </label>
            </div>
            {selectedAnswer === option.id && (
              <div className="absolute right-4 w-4 h-4 rounded-full bg-primary"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;