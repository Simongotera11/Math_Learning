import React, { useState } from 'react';
import jsonData from '../data/quiz.json';
import { useParams } from 'react-router-dom';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Grader from '../components/Grader';

function findTopicById  (id) {
    const title = id.replace(/-/g, ' '); // replaces hyphens with spaces
    return jsonData.topics.find(topic => topic.topic_title.toLowerCase() === title.toLowerCase());
};


function renderLatex (text) {
    // Split block math ($$...$$) first
    const blockParts = text.split('$$');
    return blockParts.map((part, index) => {
      if (index % 2 === 1) { // Block math
        return <div key={index} dangerouslySetInnerHTML={{ 
          __html: katex.renderToString(part, { displayMode: true }) 
        }} />;
      } else { // handle inline math (\\(...\\)) in text
        const inlineParts = part.split(/(\\\(|\\\))/g);
        return inlineParts.map((p, i) => {
          if (p === '\\(') {
            const latex = inlineParts[i + 1];
            inlineParts.splice(i, 3); // remove processed parts
            return <span key={i} dangerouslySetInnerHTML={{
              __html: katex.renderToString(latex)
            }} />;
          }
          return <span key={i}>{p}</span>;
        });
      }
    });
};



function QuizPage() {
  const { id } = useParams();
	const [selectedAnswers, setSelectedAnswers] = useState({});
	const [showResults, setShowResults] = useState(false);
	const selectedTopic = findTopicById(id);
	
	function handleSubmit  ()  {
    	setShowResults(true);
	};

  return(
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      {selectedTopic ? (
        <div>
          {/* Quiz Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            {selectedTopic.topic_title}
          </h1>

          {/* Questions Container */}
          <form>
            {selectedTopic.questions.map((question, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6"
              >
                {/* Question Text */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
                  {renderLatex(question.question)}
                </h3>

                {/* Answers Container */}
                <div className="space-y-2 sm:space-y-3">
                  {question.answers.map((answer, i) => (
                    <label
                      key={i}
                      className="flex items-center p-2 sm:p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                    >
                      {/* Radio Button */}
                      <input
                        type="radio"
                        name={`question-${index}`}
                        checked={selectedAnswers[index] === i}
                        onChange={() =>
                          setSelectedAnswers((prev) => ({
                            ...prev,
                            [index]: i,
                          }))
                        }
                        className="form-radio h-4 w-4 sm:h-5 sm:w-5 text-green-700"
                      />

                      {/* Answer Text */}
                      <span className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-700">
                        {renderLatex(answer)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </form>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:green-800 transition-colors cursor-pointer"
            >
              Submit Quiz
            </button>
          </div>

          {/* Grader Component */}
          {showResults && (
            <Grader
              questions={selectedTopic.questions}
              selectedAnswers={selectedAnswers}
            />
          )}
        </div>
      ) : (
        <p className="text-center text-red-500">Topic not found</p>
      )}
    </div>
  );

  
}

export default QuizPage;