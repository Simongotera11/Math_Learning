import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 


function Grader({ questions, selectedAnswers }) {
	
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Results</h2>
      <div className="space-y-4">
			  {questions.map((question, index) => {
			
          const isCorrect = (selectedAnswers[index]+1) == (question.correct_answer);
          return (
            <div key={index} className="flex items-center space-x-3">
              {/* Icon for Correct/Incorrect */}
              {isCorrect ? (
                <FaCheckCircle className="text-green-500 text-xl" />
              ) : (
                <FaTimesCircle className="text-red-500 text-xl" />
              )}

              {/* Question Text */}
              <span className="text-gray-700">
                Question {index + 1}: {isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grader
