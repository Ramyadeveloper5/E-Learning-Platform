import React, { useState } from 'react';
import introPhoto from "../../Assets/CourseDetails/Box.png";
import BasicSampleVideo from "../../Assets/Basic-Sample-Video.mp4"
const CourseSection = ({ title, lectures, duration, media }) => {
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
          {/* Display media content (image or video) with adjustable size */}
          {media ? (
            typeof media === 'string' && media.includes('.mp4') ? (
              <video controls className="w-full h-64 mb-4">
                <source src={media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={media} alt={title} className="w-full h-64 object-contain mb-4" />
            )
          ) : (
            <p className="text-sm text-gray-600">No media available for this section.</p>
          )}
          <p className="text-sm text-gray-600">Details about the {title} section...</p>
        </div>
      )}
    </div>
  );
};

const CourseContent = () => {
  const sections = [
    { title: 'Introduction', lectures: '8 lectures', duration: '9min', media: introPhoto },
    { title: 'Setting up the Environment', lectures: '3 lectures', duration: '6min', media: null },
    { title: 'Basic Video Example', lectures: '5 lectures', duration: '15min', media: BasicSampleVideo },
    // Add more sections as needed
  ];

  return (
    <div className="w-3/4 border border-gray-300 ms-11">
      <div className="p-4 bg-gray-100 border-b border-gray-300 text-lg font-bold text-gray-800">
        Course Content
      </div>
      {sections.map((section, index) => (
        <CourseSection
          key={index}
          title={section.title}
          lectures={section.lectures}
          duration={section.duration}
          media={section.media}
        />
      ))}
    </div>
  );
};

export default CourseContent;
