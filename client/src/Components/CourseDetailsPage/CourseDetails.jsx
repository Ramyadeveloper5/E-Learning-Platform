import React from "react";
import profilepic from "../../Assets/CoursesDraw/full stack.jpg";
import { TiTick } from "react-icons/ti";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { GrCircleAlert } from "react-icons/gr";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
function CourseDetails() {
  return (
    <div className="m-5">

      {/* Course Header Section */}
      <div className=' border-neutral-900 pb-4 lg:mb-35 bg-gray-100 text-black rounded-lg bg-gray-50 shadow-lg p-5'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start p-11'>

              {/* Course Title */}
              <h1 className='text-4xl '>
                The Complete 2023  Full Stack Web Developer Bootcamp
              </h1>

              {/* Course Description */}
              <p className='my-2 max-w-xl py-6 tracking-tighter '>
                Learn to build websites with HTML, CSS, JAVASCRIPT, Bootstrap, PHP, MySQL, WordPress, OOP & more!
              </p>

              {/* Additional Course Info */}
              <span className='pb-16  lg:mt-1 '>
                Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.
              </span>

              {/* Enroll & Purchase Options */}
              <div className="flex justify-center mt-1 space-x-4 ">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Enroll with Subscription
                </button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  Purchase Course
                </button>
              </div>

            </div>
          </div>

          {/* Instructor Info Section */}
          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='justify-center'>
              <img src={profilepic} alt='Course' className="w-full h-auto rounded-lg" />
              <div className="flex flex-row pt-5 items-center">
                <h3 className="text-sm flex items-center px-2 ">
                  4.4
                  <span className="flex items-center space-x-1 text-yellow-600 ms-2">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarHalf />
                  </span>
                </h3>
                <h3 className="text-sm px-2">(5381 ratings) 136,928 students</h3>
              </div>

              <h3 className="text-sm px-2 ">
                Created by <span className="text-xl text-slate-700 ms-5">Srini Vanamala</span>
              </h3>

              <div className="flex flex-row pt-5 items-center">
                <h3 className="text-sm flex items-center px-2">
                  <GrCircleAlert className="mr-1" />
                  Last updated 10/2023
                </h3>
                <h3 className="text-sm flex items-center px-2">
                  <AiOutlineGlobal className="mr-1" />
                  English
                </h3>
                <h3 className="text-sm flex items-center px-2">
                  <MdAutoAwesomeMosaic className="mr-1" />
                  English [Auto]
                </h3>

              </div>



              <div className=" px-2 mt-5 flex items-center">
                <span className=" px-2 flex items-center font-bold text-4xl">
                  <BsCurrencyRupee className="mr-1 " />
                  799
                </span>
                <div className="flex items-center  mx-2 text-slate-700">

                  <BsCurrencyRupee className="mr-1" />
                  <span className="line-through"> 4,999</span>
                  <span className="mx-2"> 84% off</span>
                </div>
              </div>



              <div className="text-sm px-2   flex items-center text-red-700">
                <LuAlarmClock className="mr-1 text-xl ms-5" />
                <div className="flex items-center text-sm mx-2">
                  <span clas>
                    <span className="font-bold">1 day </span>
                    left at this price!</span>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>



      {/* What You'll Learn Section */}
      <div className="mt-5 p-11 place-items-center">
        <div className="h-auto w-full md:w-2/2 border border-black  bg-gray-50 shadow-lg p-5">
          <div className="text-center text-xl font-semibold mb-4 text-gray-800 mt-2">
            What you'll learn
          </div>
          <div className="grid grid-cols-1 gap-3 text-gray-700 mt-10">
            <div className="flex items-center space-x-2 ">
              <TiTick />
              <span>Understand the essentials of Local and Wide Area Networks</span>
            </div>
            <div className="flex items-center space-x-2 ">
              <TiTick />
              <span>Build dynamic websites and web applications</span>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick />
              <span>Integrate databases with MySQL and PHP</span>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick />
              <span>Implement responsive designs with Bootstrap</span>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick />
              <span>Understand Object-Oriented Programming principles</span>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick />
              <span>Deploy websites and applications online</span>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick />
              <span>Utilize WordPress for content management</span>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick />
              <span>Explore advanced JavaScript concepts and frameworks</span>
            </div>

          </div>
        </div>
      </div>

      <div className="">
        <div className=" text-xl font-semibold mb-4 text-gray-800 ms-12">Explore related topics</div>
      </div>
      <div className="flex flex-row  gap-4">
        <button className="border border-black text-center ">
          <span className=" text-sm font-semibold mb-4 text-gray-800 ms-12">Explore related topics</span>
        </button>
        <button className="border border-black">
          <span className=" text-sm font-semibold mb-4 text-gray-800 ms-12">Explore related topics</span>
        </button>
      </div>


    </div>
  );
}

export default CourseDetails;