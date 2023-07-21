import school1 from '../assets/images/01-1.jpeg';
import logo from '../assets/images/schLogo.png';
import { HiOutlineCash } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function CourseCard({ prop, isActive }) {
  return (
      <div className='card card-hover my-6 w-76 2xs:w-80 sm:w-72 md:w-60 lg:w-card xl:w-73 2xl:w-card justify-center mx-2 xs:ms-4 2xs:ms-7 sm:mx-0 '>
        <Link to={`/course/${prop.course}`} >
        <div className="shadow-2 rounded-b-2xl  h-card 2xs:h-card2 sm:h-card flex flex-col justify-between">
          <div className=" rounded-xl h-imgHeight">
            <img
              className=" rounded-t-xl h-imgHeight w-full"
              src={`/images/${prop.url}`}
              alt="bachelors_degree"
            />
          </div>
          <div className="text-left m-4">
            <div className="font-normal text-sm text-orange">{prop.type}</div>
            <div className="font-bold pb-2 text-light_black ">{prop.course.length > 50 ? `${prop.course.substring(0, 54) + '...'} ` : prop.course}</div>
            <div className='flex items-center gap-x-4'>
              <div className='w-6'>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <div className="text-light_black text-sm italic opacity-70 ">
                  {prop.school.length > 30 ? `${prop.school.substring(0, 30) + '...'} ` : prop.school}
                </div>
                <div className="text-light_black text-sm opacity-70">
                  Toronto, Canada
                </div>
              </div>
            </div>


            <div className="flex gap-x-2 items-center opacity-90 text-light_black my-2">
              <div className="text-2xl">
                <HiOutlineCash />
              </div>
              <div className='font-bold'>$27,000/ year</div>
            </div>
          </div>

          <div className="flex gap-x-3 justify-center text-light_black text-xs xs:text-sm md:text-xs border-t border-light_black border-opacity-10 py-4 ">
            <div className="flex items-center gap-x-1">
              <div className='font-bold text-xl  md:text-xs xl:text-xl'>
                <AiOutlineCalendar />
              </div>
              <div>4 years</div>
            </div>
            <div className="flex items-center gap-x-1">
              <div className='font-bold text-xl md:text-xs xl:text-xl '>
                <BiTimeFive />
              </div>
              <div>Full Time</div>{" "}
            </div>
            <div className="flex items-center gap-x-1">
              <div className='font-bold text-xl  md:text-xs xl:text-xl'>
                <SlLocationPin />
              </div>
              <div>On Campus</div>{" "}
            </div>
          </div>
        </div>
        </Link>
      </div>

  )
}