import school1 from '../assets/images/01-1.jpeg';
import logo from '../assets/images/schLogo.png';
import { HiOutlineCash } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function CourseCard({ prop }) {

  return (
      <div className='card card-hover my-6 w-76 2xs:w-80 sm:w-72 md:w-60 lg:w-card xl:w-73 2xl:w-card justify-center mx-2 xs:ms-4 2xs:ms-7 sm:mx-0 '>
        <Link to={`/course/${prop.slug}`} state={prop}>
        <div className="shadow rounded-b-2xl  h-card 2xs:h-card2 sm:h-card flex flex-col justify-between">
          <div className=" rounded-xl h-imgHeight">
            <img
              className=" rounded-t-xl h-imgHeight w-full "
              src={prop.school.banner}
              style={{ filter: 'brightness(90%)' }}
              alt="bachelors_degree"
            />
          </div>
          <div className="text-left m-4">
            <div className="font-normal text-sm text-orange">{prop.degree_type.short_name}</div>
            <div className="font-bold pb-2 text-light_black ">{prop.name.length > 50 ? `${prop.name.substring(0, 54) + '...'} ` : prop.name}</div>
            <div className='flex items-center gap-x-4'>
              <div className='w-6'>
                <img src={prop.school.logo} alt="logo" />
              </div>
              <div>
              <Link to={`/school/${prop.school.slug}`}>
                <div className="text-light_black text-sm italic opacity-70 ">
                  {prop.school.name.length > 30 ? `${prop.school.name.substring(0, 30) + '...'} ` : prop.school.name}
                </div>
                </Link>
                <div className="text-light_black text-sm opacity-70">
                  {`${prop.school.city}, ${prop.school.country.name}`}
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
              <div>{prop.duration } {prop.duration_base}</div>
            </div>
            <div className="flex items-center gap-x-1">
              <div className='font-bold text-xl md:text-xs xl:text-xl '>
                <BiTimeFive />
              </div>
              <div>{prop.course_format.toLowerCase()} Time</div>{" "}
            </div>
            <div className="flex items-center gap-x-1">
              <div className='font-bold text-xl  md:text-xs xl:text-xl'>
                <SlLocationPin />
              </div>
              <div>{prop.attendance === 'SITE' ? 'On-Site' : 'Online'}</div>{" "}
            </div>
          </div>
        </div>
        </Link>
      </div>

  )
}