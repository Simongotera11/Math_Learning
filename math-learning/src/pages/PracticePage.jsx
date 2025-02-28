import React from 'react'
import TopicList from '../components/TopicList';

function PracticePage () {
  return (
	<div className='max-w-2xl mx-auto p-4'>
	  <h1 className='text-2xl font-bold text-gray-800'>
		What Would you Like to Practice Today?
		  </h1>
		  <TopicList></TopicList>
		  
		  
	</div>
  )
}

export default PracticePage
