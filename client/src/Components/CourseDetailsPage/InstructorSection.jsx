import React from 'react'
import Srinivan from "../../Assets/CourseDetails/srinivan.jpg"
import { IoIosStar } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
function Instructor() {
  return (
    <div className=''>

      <div className=" mt-7">
        <div className="text-xl font-semibold mb-2 text-gray-800 ms-12">Instructor</div>
        <button className=" text-purple-900 hover:text-purple-950 font-semibold underline ms-12">
          Learn more
        </button>

        <div className="text-sm text-slate-800 ms-12 mt-2  font-medium">Instructor</div>

        <div className="flex flex-wrap gap-14 ms-12"> {/* Added flex-wrap and gap for spacing */}
          <div className='mt-3'>
            <img src={Srinivan} alt="Sri" className='rounded-full h-28' />
          </div>

          <div className=' mt-3'>
            <div className="flex items-center space-x-4 text-gray-800 ">
              <IoIosStar />
              <div className="text-sm text-gray-800">4.4 Instructor Rating</div>
            </div>
            <div className="flex items-center space-x-4 mt-3 text-gray-800">
              <MdReviews />
              <div className="text-sm text-gray-800">7,293 Reviews</div>
            </div>
            <div className="flex items-center space-x-4 text-gray-800">
              <BsFillPeopleFill />
              <div className="text-sm text-gray-800">182,545 Students</div>
            </div>
            <div className="flex items-center space-x-4 mt-3 text-gray-800">
              <FaPlayCircle />
              <div className="text-sm text-gray-800">7 Courses</div>
            </div>
          </div>
        </div>
      </div>



      {/* ............................................................. */}
      <div className="w-3/4 ms-11 mt-6 bg-white ">
        <section className="mb-8 text-sm ">

          <ul className="list-disc pl-6 space-y-2 ">
            <p>Hi! I'm Srini. I enjoy teaching and love to help students bring to next level.</p>
            <p>Last couple of years, I have released massive amount of course content that has <span className='font-semibold text-gray-800'> helped students to become web developer.</span> I am glad that my courses has helped many students to build a career in the Web Developer Space.</p>
            <p>My formula to teach is very simple:</p>
            <p className='font-semibold text-gray-800'>"You learn by doing and not by watching..."</p>
            <p>That is the reason I stress more about <span className='font-semibold text-gray-800'>exercises, assignments and quiz.</span></p>
            <p>I personally believe if Students come up with the solution to any problem that will <span className='font-semibold text-gray-800'>help them to remember things for longer time.</span> </p>
            <p>I follow a <span className='font-semibold text-gray-800'>proven and structured method</span> of teaching which can help students to <span className='font-semibold text-gray-800'>learn any concept 10x times faster.</span></p>
            <p>You will find me <span className='font-semibold text-gray-800'>teaching in defined outcomes</span> for each section of the course with lots of home work for students to practise..:)</p>
            <p className='font-semibold text-gray-800'>Join me on this passionate and fun journey of learning Web Development!</p>

            <div className='flex items-center'>
              <button className="mt-2 text-purple-900 hover:text-purple-950 font-semibold underline">
                Show more
              </button>
              <div className="ml-2 text-purple-900 hover:text-purple-950 ">

                <FaAngleUp />
              </div>
            </div>

          </ul>

        </section>

      </div>
    </div>
  )
}

export default Instructor
