import React, { useState } from "react";
import topicsData from "../data/topics.json";
// import SingleTopicPage from "../pages/SingleTopicPage";
import { Link } from "react-router-dom";

function PracticeTopic () {


 
	
  return (
    <div className="w-96 bg-white shadow-md p-4">
      {topicsData.topics.map((topic, index) => (
        <div key={index} className="mb-2">
          {/* Topic Title */}
          <Link to={`${topic.title.replace(/ /g, '-')}`}
            className="w-full text-left font-semibold text-gray-700 py-2 px-2 border-b flex justify-between items-center hover:bg-gray-100"
          >
            {topic.title}
          </Link>

          {/* Subtopics List */}
          {/* {expandedTopic === index && (
            <ul className="mt-2 pl-4 border-l-2 border-gray-300">
              {topic.subtopics.map((subtopic) => (
                <li key={subtopic.id}>
                  <Link to={`/${subtopic.id}`}
                    className={`w-full text-left py-2 px-4 rounded-md flex items-center space-x-2 text-green-700 hover:bg-gray-100`}   
                  >    
                    <span>{subtopic.id} {subtopic.title}</span>                   
                  </Link>
                </li>
              ))}
            </ul>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default PracticeTopic;