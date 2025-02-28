import React from 'react'
import PracticeTopic from '../components/PracticeTopics'
import topicsData from '../data/topics.json';
import { Link } from 'react-router-dom';
import TopicList from '../components/TopicList';

function PracticePage () {
 return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        What Would You Like to Practice Today?
      </h1>
		<PracticeTopic/>
    </div>
  );
}

export default PracticePage
