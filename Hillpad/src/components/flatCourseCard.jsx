import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import logo from '../assets/images/schLogo.png';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { FaFlagCheckered, FaPaperPlane } from 'react-icons/fa';
export default function FlatCourseCard({prop}) {
  return (
    <div>
        <Link to={`/course/${prop.course}`} >

        <div className=' card-hover border border-light_black border-opacity-20 p-3 flex gap-x-4 items-center shadow-2 w-full'>
          <div className='w-1/5 hidden md:block'>
            <img src={`/images/${prop.url}`} className='' />
          </div>
          <div className='text-light_black w-full md:w-4/5'>
          <div className="font-bold text-lg md:text-2xl text-light_black ">{prop.course.length > 60 ? `${prop.course.substring(0, 64) + '...'} ` : prop.course}</div>
            <div>
              <div className='flex gap-x-8 items-center'>
                <div className='md:text-lg text-normal'><h3>University of Balablu</h3></div>
                <div className='md:flex items-center gap-x-2  hidden'>

                  <div className="flex text-yellow text-normal ">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <div>
                    40 reviews
                  </div>
                </div>
              </div>
              <div>
                <p className='text-xs py-1'>
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span><span className='hidden md:block'>Modi, illo ratione fuga unde tempore nostrum architecto? Aspernatur, animi, corporis id ser ducimus?</span>
                </p>
              </div>
              <div className='flex font-semibold text-xs md:text-sm text-opacity-40 gap-x-4 mt-2'>
                                        <div className='flex items-center gap-x-2'><span className='hidden md:block'><FiCalendar /></span><span>4 years</span></div>
                                        <div className='flex items-center gap-x-2'><span className='hidden md:block'><FiClock /></span><span>Full-Time</span></div>
                                        <div className='flex items-center gap-x-2'><span className='hidden md:block'><FiMapPin /></span><span>On Campus</span></div>
                                        <div className='flex items-center gap-x-2'><span className='hidden md:block'><FaFlagCheckered /></span><span>Sep 2023</span></div>

                                    </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
  )
}