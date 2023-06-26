import school1 from '../assets/images/01-1.jpeg';
import logo from '../assets/images/schLogo.png';
import { HiOutlineCash } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineCalendar } from "react-icons/ai";
import '../components/coursecard.css';
export default function CourseCard({ prop, isActive }) {
  return (
    <div className={`flex my-6 w-72 justify-center max-h `}>
      <div className="shadow rounded-b-2xl  ">

        <div className=" rounded-xl">
          <img
            className=" rounded-t-2xl"
            src={school1}
            alt="bachelors_degree"
          />
        </div>
        <div className="text-left m-4">
          <div className="font-normal text-sm text-orange">{prop.type}</div>
          <div className="font-bold pb-2">{prop.course.length > 20 ? `${prop.course.substring(0, 28) + '...'} ` : prop.course}</div>
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


          <div className="flex gap-x-2 items-center opacity-70 text-light_black my-2">
            <div className="text-2xl">
              <HiOutlineCash />
            </div>
            <div className='font-bold'>$27,000/ year</div>
          </div>
        </div>

        <div className="flex gap-x-3 justify-center text-light_black text-sm border-t border-light_black border-opacity-30 py-4">
          <div className="flex items-center gap-x-1">
            <div className='font-bold text-xl'>
              <AiOutlineCalendar />
            </div>
            <div>4 years</div>
          </div>
          <div className="flex items-center gap-x-1">
            <div className='font-bold text-xl'>
              <BiTimeFive />
            </div>
            <div>Full Time</div>{" "}
          </div>
          <div className="flex items-center gap-x-1">
            <div className='font-bold text-xl'>
              <SlLocationPin />
            </div>
            <div>On Campus</div>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}