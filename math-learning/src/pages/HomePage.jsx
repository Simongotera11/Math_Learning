import React from "react";
import TopicList from "../components/TopicList";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Side - Introduction */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-green-700 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Welcome to Math Learning
        </h1>
        <p className="text-base md:text-lg text-center">
          Explore a variety of math topics, complete interactive exercises, and enhance your understanding.
        </p>
      </div>

      {/* Right Side - Sidebar */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-10 shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Lessons</h2>
        <TopicList />
      </div>
    </div>
  );
};

export default HomePage;
