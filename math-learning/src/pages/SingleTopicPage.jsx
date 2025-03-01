import TopicList from "../components/TopicList";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css"; // Import KaTeX CSS
import topicsData from "../data/topics.json";


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

function SingleTopicPage  ()  {
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


