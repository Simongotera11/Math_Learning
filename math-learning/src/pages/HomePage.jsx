import React from "react";
import TopicList from "../components/TopicList";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side - Introduction */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Math Learning</h1>
        <p className="text-lg text-center">
          Explore a variety of math topics, complete interactive exercises, and enhance your understanding.
        </p>
      </div>
      
      {/* Right Side - Sidebar */}
      <div className="w-1/2 bg-white p-10 shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Lessons</h2>
        <TopicList></TopicList>
       
      </div>
    </div>
  );
};

export default HomePage;
