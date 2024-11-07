import React from 'react';

const RequirementsDescription = () => {
  return (
    <div className="w-3/4 ms-11 mt-6 bg-white  ">
      <section className="mb-8 text-sm">
        <h2 className="text-sm font-semibold mb-4 text-gray-800">Requirements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No pre-knowledge is required - Interest is all you need!</li>
          <li>A PC or Mac is required</li>
          <li>
            No software is required in advance of the course (all software used in the course is
            free)
          </li>
        </ul>
      </section>
      
      <section className='text-sm'>
        <h2 className="text-sm font-semibold mb-4 text-gray-800">Description</h2>
        <p className="mb-4 ">
          Join <span className="font-semibold">130K+ students</span> in the Complete Web development Bootcamp.
        </p>
        <p className="mb-4">This is what you get in this course:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">12 Courses into 1 Course.</span> (HTML, CSS, JAVASCRIPT, BOOTSTRAP, PHP, MYSQL, PHP OOP, WORDPRESS, XML, API, JSON and REST)
          </li>
          <li><span className="font-semibold">48+</span> hours of Training.</li>
          <li><span className="font-semibold">6 Web Development Books.</span></li>
          <li>Online Premium Access to <span className="font-semibold">Documentation.</span></li>
          <li><span className="font-semibold">80+ PHP Live Projects</span> Source Code.</li>
          <li><span className="font-semibold">Shopping Cart Project</span> Source Code.</li>
          <li><span className="font-semibold">WordPress Site Project</span> with Themes.</li>
          <li>Interview Questions (1000+).</li>
          <li><span className="font-semibold">30 days Money Back</span> Guarantee (0% Risk).</li>
          <li><span className="font-semibold">100% FREE for Lifetime Access.</span></li>
        </ul>
      </section>
    </div>
  );
};

export default RequirementsDescription;
