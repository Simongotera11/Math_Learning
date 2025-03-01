import React, { useState } from "react";
import topicsData from "../data/topics.json";
import { Link } from "react-router-dom";
import { MdOutlineExpandMore ,MdOutlineExpandLess} from "react-icons/md";

const TopicList = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);
  
  function toggleTopic  (index)  {
    setExpandedTopic(expandedTopic === index ? null : index);
	};
	
  return (
    <div className="w-full bg-white shadow-md p-4">
      {topicsData.topics.map((topic, index) => (
        <div key={index} className="mb-2">
          {/* Topic Title */}
          <button
            className="w-full text-left font-semibold text-gray-700 py-2 px-2 border-b flex justify-between items-center hover:bg-gray-100"
            onClick={() => toggleTopic(index)}
          >
            {topic.title}
            <span>{expandedTopic === index ? <MdOutlineExpandLess /> : <MdOutlineExpandMore/>}</span>
          </button>

          {/* Subtopics List */}
          {expandedTopic === index && (
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
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicList;