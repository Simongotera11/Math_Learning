// import React from "react";
// import { useParams } from "react-router-dom";
// import topicsData from "../data/topics.json";

// const SingleTopicPage = () => {
//   const { id } = useParams(); // Get the topic ID from the URL

//   // Find the subtopic based on the ID
//   let selectedSubtopic = null;

//   for (const topic of topicsData.topics) {
//     selectedSubtopic = topic.subtopics.find((sub) => sub.id === id);
//     if (selectedSubtopic) break; // Stop searching once found
//   }

//   return (
//     <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg">
//       {selectedSubtopic ? (
//         <>
//           <h1 className="text-2xl font-bold text-gray-800">{selectedSubtopic.id}</h1>
//           <h2 className="text-xl text-green-700 mt-2">{selectedSubtopic.title}</h2>
//           <p className="mt-4 text-gray-600">
//             {/* Placeholder for explanation content */}
//             This section will contain detailed explanations, examples, and related content about <strong>{selectedSubtopic.title}</strong>.
//           </p>
//         </>
//       ) : (
//         <p className="text-red-500 text-lg">Topic not found</p>
//       )}
//     </div>
//   );
// };

// export default SingleTopicPage;

import TopicList from "../components/TopicList";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css"; // Import KaTeX CSS
import topicsData from "../data/topics.json";
import { FaBars, FaTimes } from 'react-icons/fa';

const renderContentWithLatex = (content) => {
  return content.split("\n\n").map((paragraph, index) => {
    // Block Math ($$...$$)
    if (paragraph.startsWith("$$") && paragraph.endsWith("$$")) {
      const latexExpression = paragraph.slice(2, -2);
      return (
        <div
          key={index}
          className="my-4 text-center"
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(latexExpression, { displayMode: true }),
          }}
        />
      );
    }

    // Split for inline math ($...$ or \(...\))
    const parts = paragraph.split(/(\$.*?\$|\\\(.*?\\\))/g);
    return (
      <p key={index} className="text-gray-600">
        {parts.map((part, i) => {
          if (!part) return null;
          const isDollarInline = part.startsWith("$") && part.endsWith("$");
          const isParenInline = part.startsWith("\\(") && part.endsWith("\\)");
          
          if (isDollarInline || isParenInline) {
            const latexContent = isDollarInline 
              ? part.slice(1, -1) 
              : part.slice(2, -2);
            return (
              <span
                key={i}
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(latexContent, { displayMode: false }),
                }}
              />
            );
          } else {
            return part;
          }
        })}
      </p>
    );
  });
};

const SingleTopicPage = () => {
  	const { id } = useParams(); // Get the topic ID from URL
	let selectedSubtopic = null;
	const [isTopicListVisible, setIsTopicListVisible] = useState(false);

  for (const topic of topicsData.topics) {
    selectedSubtopic = topic.subtopics.find((sub) => sub.id === id);
    if (selectedSubtopic) break; // Stop searching once found
  }

  if (!selectedSubtopic) {
    return <div className="p-4 text-red-500">Topic not found.</div>;
  }

	 return (
    <div className="flex flex-col md:flex-row">
      {/* Expandable Icon (Mobile Only) */}
      {/* <div className="md:hidden fixed top-10 right-4 z-50">
        <button
          onClick={() => setIsTopicListVisible(!isTopicListVisible)}
          className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          {isTopicListVisible ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div> */}

      {/* TopicList (Visible on Desktop, Toggleable on Mobile) */}
      <div
        className={`${isTopicListVisible ? 'block' : 'hidden'} md:block w-full md:w-1/4 bg-white shadow-md p-4`}
      >
        <TopicList />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        <h1 className="text-2xl font-bold text-gray-800">
          {selectedSubtopic.id} {selectedSubtopic.title}
        </h1>
        <div className="mt-2">{renderContentWithLatex(selectedSubtopic.content)}</div>
      </div>
    </div>
  );
};

export default SingleTopicPage;


