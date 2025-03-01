import React from "react";
import topicsData from "../data/topics.json";
import { Link } from "react-router-dom";

function PracticeTopic () {	
  return (
       <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        {topicsData.topics.map((topic, index) => (
          <div key={index} className="border-b last:border-b-0">
            {/* Topic Link */}
            <Link  
              to={`${topic.title.replace(/ /g, '-')}`}   // replaces white spaces so that they don't show in url
              className="block w-full text-left font-semibold text-gray-700 py-3 px-4 hover:bg-gray-50 transition-colors duration-200"
            >
              {topic.title}
            </Link>
          </div>
        ))}
      </div>
  );
};

export default PracticeTopic;