import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { FaFlagCheckered, FaCoins } from 'react-icons/fa';
export default function FlatCourseCard({prop}) {
  const month = {
    '1': 'Jan',
    '2': 'Feb',
    '3': 'Mar',
    '4': 'Apr',
    '5': 'May ',
    '6': 'Jun',
    '7': 'Jul',
    '8': 'Aug',
    '9': 'Sep',
    '10': 'Oct ',
    '11': 'Nov',
    '12': 'Dec',
  }
  return (
    <div >
        <Link to={`/course/${prop.slug}`} state={prop}>

        <div className=' card-hover border border-light_black border-opacity-20 p-3 flex gap-x-4 items-center shadow-2 w-full'>
          <div className='hidden w-28 md:block '>
            <img src={prop.school.logo} className='h-28 w-full' />
          </div>
          <div className='text-light_black w-full md:w-4/5'>
          <div className=" font-bold text-base sm:text-lg md:text-2xl text-light_black ">{prop.name.length > 60 ? `${prop.name.substring(0, 64) + '...'} ` : prop.name}</div>
            <div>
              <div className='flex gap-x-8 items-center'>
                <div className=' text-sm md:text-lg text-normal'><h3>{prop.school.name}</h3></div>
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
                <span className='hidden md:block'>{prop.about.length  > 250 ? `${prop.about.substring(0, 250) + '...'} ` : prop.about}</span>
                  <span className='md:hidden'>{prop.about.length  > 120 ? `${prop.about.substring(0, 120) + '...'} ` : prop.about}</span>
                </p>
              </div>
              <div className='flex font-semibold text-xs md:text-sm text-opacity-40 gap-x-4 mt-2'>
                                        <div className='flex items-center gap-x-2'><span className='hidden md:block'><FiCalendar /></span><span>{prop.duration } {prop.duration_base}</span></div>
                                        <div className='flex items-center gap-x-2'><span className='hidden md:block'><FiClock /></span><span>{prop.course_format.toLowerCase()}-Time</span></div>
                                        <div className='flex items-center gap-x-2'><span className='hidden md:block'><FiMapPin /></span><span>{prop.attendance === 'SITE' ? 'On-Site' : 'Online'}</span></div>
                                        <div className='flex items-center gap-x-2'><span className='hidden md:block'><FaFlagCheckered /></span><span>{month[prop.course_dates.start_month]} {prop.course_dates.start_year}</span></div>
                                        <div className='hidden lg:flex items-center gap-x-2'><span className='hidden md:block'><FaCoins /></span><span>{prop.tuition_fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {prop.tuition_currency.short_code.toUpperCase()}</span></div>

                                    </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
  )
}