import React from "react";
import CoursesContent from "../CourseDetailsPage/CoursesContent";
import RequirementsDescription from "../CourseDetailsPage/RequirementsDescription";
import InstructorSection from "../CourseDetailsPage/InstructorSection";
import profilepic from "../../Assets/CourseDetails/full stack.jpg";
import Learn from "../../Assets/CourseDetails/learn.png";
import Nasdaq from "../../Assets/CourseDetails/Nasdaq.png";
import Volkswagen from "../../Assets/CourseDetails/Volkswagen1.png";
import Box from "../../Assets/CourseDetails/Box.png";
import NetApp from "../../Assets/CourseDetails/NetApp.png";
import Eventbrite from "../../Assets/CourseDetails/Eventbrite.png";
import { TiTick } from "react-icons/ti";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { GrCircleAlert } from "react-icons/gr";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegFile } from "react-icons/fa";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";



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
                <button className="font-semibold bg-white text-gray-600 px-6 py-2  hover:bg-gray-200 hover:text-black transition  border border-black rounded-full">
                  Enroll with Subscription
                </button>
                <button className="font-semibold bg-green-400 text-black px-6 py-2  hover:bg-emerald-500 hover:text-black transition  border border-black  rounded-full">
                  Purchase Course
                </button>
              </div>

            </div>
          </div>

          {/* Instructor Info Section */}
          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='justify-center'>
              <img src={profilepic} alt='Course' className="w-full h-auto rounded-lg cursor-pointer" />
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


              <div className="">
                <div className="  mt-5 flex items-center">
                  <span className=" px-2 flex items-center font-bold text-4xl">
                    <BsCurrencyRupee className="mr-1 " />
                    899
                  </span>
                  <div className="flex items-center  mx-2 text-slate-700">

                    <BsCurrencyRupee className="mr-1" />
                    <span className="line-through"> 5,999</span>
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
      </div>



      {/* What You'll Learn Section */}
      <div className="mt-5 p-11 place-items-center">
        <div className="h-auto w-full md:w-2/2 border border-gray-300   p-5">
          <div className="text-center text-xl font-semibold  text-gray-800 mt-2">
            What you'll learn
          </div>
          <div className="flex flex-row gap-x-20 ms-10">
            <div className="grid grid-cols-1 gap-3 text-gray-700 mt-10 ">
              <div>
                <div className="flex items-center space-x-2 ">
                  <TiTick />
                  <span>Become Web Developer and Start Earning.</span>
                </div>
                <div className="flex items-center space-x-2 ">
                  <TiTick />
                  <span>Become Freelancer Web developer on Fiverr or UpWork.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TiTick />
                  <span>Start your own online Business.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TiTick />
                  <span>Be proficient with databases and server-side languages with PHP and MySQL.</span>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <TiTick />
                  <span>Apply for Job as Junior Web Developer.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TiTick />
                  <span>Build Website with WordPress, PHP and Laravel and Sell Online.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TiTick />
                  <span>Learn to build websites.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TiTick />
                  <span>Become a front-end and Back-end developer - Complete Full Stack Developer.</span>
                </div>
              </div>
            </div>

            {/* Learn img section */}
            <div className="">
              <img src={Learn} alt="" />
            </div>
          </div>

        </div>
      </div>

      {/* More Topics Section */}
      <div className="">
        <div className=" text-xl font-semibold mb-3 text-gray-800 ms-12">Explore related topics</div>
      </div>
      <div className="flex items-center space-x-4  ">
        <button className="border border-black p-4 rounded-full text-sm font-semibold mb-4 bg-white text-gray-800 hover:bg-black hover:text-white transition ms-12 flex justify-center items-center  cursor-pointer">
          Web Development
        </button>
        <button className="border border-black p-4 rounded-full  text-sm font-semibold mb-4 bg-white text-gray-800 hover:bg-black hover:text-white transition ms-12 flex justify-center items-center  cursor-pointer">
          Development
        </button>
      </div>

      <div className=" mt-7">
        <div className="text-xl font-semibold mb-4 text-gray-800 ms-12">This course includes:</div>
        <div className="flex flex-wrap gap-24 ms-12"> {/* Added flex-wrap and gap for spacing */}
          <div>
            <div className="flex items-center space-x-2">
              <MdOndemandVideo />
              <div className="text-sm text-gray-800">48.5 hours on-demand video</div>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <FaRegFile />
              <div className="text-sm text-gray-800">63 articles</div>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <HiOutlineFolderDownload />
              <div className="text-sm text-gray-800">21 downloadable resources</div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              
              <div className="text-sm text-gray-800">Access on mobile and TV</div>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <GiTrophyCup />
              <div className="text-sm text-gray-800">Certificate of completion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top companies section */}


      <div className=" p-11 place-items-start">
        <div className="h-auto w-full md:w-3/4 border border-gray-300  p-5">
          <div className="text-left text-xl font-semibold  text-black ms-7">
            Top companies offer this course to their employees
          </div>

          <div className="text-gray-800 ms-7">
            This course was selected for our collection of top-rated courses trusted by businesses worldwide.
            <button className=" text-purple-800 font-medium hover:underline">
              Learn more
            </button>
          </div>
          <div className="flex justify-around items-center gap-11 mt-2">
            <img src={Nasdaq} alt="Nasdaq" className="h-12" />
            <img src={Volkswagen} alt="Volkswagen" className="h-12" />
            <img src={Box} alt="Box" className="h-12" />
            <img src={NetApp} alt="NetApp" className="h-12" />
            <img src={Eventbrite} alt="Eventbrite" className="h-5" />
          </div>




        </div>
      </div>
      <CoursesContent />
      <RequirementsDescription />
      <InstructorSection/>
      
    </div>
  );
}

export default CourseDetails;


