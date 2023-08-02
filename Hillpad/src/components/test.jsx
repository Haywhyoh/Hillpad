import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import logo from '../assets/images/schLogo.png';
import { AiFillStar } from 'react-icons/ai';
import { FaFlagCheckered, FaPaperPlane } from 'react-icons/fa';
export default function SearchBar() {
  return (
    <div>
      <div className='mt-60 w-screen w-max-full flex flex-col justify-center mx-auto '>
        <div className=' border border-light_black border-opacity-20 mx-auto p-3 flex gap-x-4 items-center shadow-2' style={{ width: '650px' }}>
          <div className='w-1/5'>
            <img src={logo} className='' />
          </div>
          <div className='text-light_black'>
            <div className='text-2xl '><h2>Electronics and Electrical Engineering</h2></div>
            <div>
              <div className='flex gap-x-8 items-center'>
                <div className='text-lg'><h3>University of Balablu</h3></div>
                <div className='flex items-center gap-x-2'>

                  <div className="flex text-yellow text-normal">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, illo ratione fuga unde tempore nostrum architecto? Aspernatur, animi, corporis id ser ducimus?
                </p>
              </div>
              <div className='flex font-semibold text-sm text-opacity-40 gap-x-4 mt-2'>
                                        <div className='flex items-center gap-x-2'><span><FiCalendar /></span><span>4 years</span></div>
                                        <div className='flex items-center gap-x-2'><span><FiClock /></span><span>Full-Time</span></div>
                                        <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>On Campus</span></div>
                                        <div className='flex items-center gap-x-2'><span><FaFlagCheckered /></span><span>Sep 2023</span></div>

                                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}