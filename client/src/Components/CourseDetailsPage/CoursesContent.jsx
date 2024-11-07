import React, { useState } from 'react';

const CourseSection = ({ title, lectures, duration }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleSection}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 text-left"
      >
        <span className="font-semibold">{title}</span>
        <span className="text-gray-500">{lectures} • {duration} {isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {/* Replace with actual lecture details if needed */}
          <p className="text-sm text-gray-600">Details about the {title} section...</p>
        </div>
      )}
    </div>
  );
};

const CourseContent = () => {
  const sections = [
    { title: 'Introduction', lectures: '8 lectures', duration: '9min' },
    { title: 'Setting up the Environment', lectures: '3 lectures', duration: '6min' },
    { title: 'Web Basics', lectures: '19 lectures', duration: '1hr 42min' },
    { title: 'Introduction to HTML5', lectures: '28 lectures', duration: '1hr 48min' },
    { title: 'Intermediate HTML5', lectures: '19 lectures', duration: '1hr 17min' },
    { title: 'Introduction to CSS3', lectures: '28 lectures', duration: '1hr 44min' },
    { title: 'Intermediate CSS3', lectures: '11 lectures', duration: '1hr 25min' },
    { title: 'HTML5 + CSS3 Projects', lectures: '7 lectures', duration: '57min' },
    { title: 'Introduction to JavaScript', lectures: '11 lectures', duration: '39min' },
    { title: 'JavaScript Language Syntax', lectures: '21 lectures', duration: '1hr 9min' },
    // Add more sections as needed
  ];

  return (
    <div className="w-3/4   border border-gray-300 ms-11">
      <div className="p-4 bg-gray-100 border-b border-gray-300 text-lg font-bold text-gray-800">
        Course Content
      </div>
      {sections.map((section, index) => (
        <CourseSection
          key={index}
          title={section.title}
          lectures={section.lectures}
          duration={section.duration}
        />
      ))}
      <button className="w-full p-4 text-blue-600 font-medium hover:underline">
        18 more sections
      </button>
    </div>
  );
};

export default CourseContent;
