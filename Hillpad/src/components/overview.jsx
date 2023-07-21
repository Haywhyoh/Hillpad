import { FiClock, FiCalendar, FiMapPin, FiLock, FiUnlock } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";
import ProjectStructure from "./projectStructure";
export default function Overview({props}) {
    return (
        <div className="text-lg">
            <div>
                <h2 className='font-semibold text-black text-2xl my-6'>Overview</h2>
            </div>
            <div>
                <p>
                    Electrical engineers shape the technology that powers our world –
                    from computer systems to electronic devices and power transmission systems.
                    Apply your skills with an optional paid co-operative internship,
                    an optional specialization in Management Sciences and leading-edge research projects.
                    In your final year, you can further specialize in Digital Hardware Design, Communication Systems,
                    Signal Processing, Control Systems or Power Systems.
                    In April 2022, Ryerson University changed its name to Toronto Metropolitan University.
                    Learn more about the institution's next chapter
                </p>
            </div>
            <div className='flex gap-x-6 font-bold text-xl  py-2 my-4 text-opacity-40'>
                <div className='flex items-center gap-x-2'><span><FiCalendar /></span><span>4 years</span></div>
                <div className='flex items-center gap-x-2'><span><FiClock /></span><span>Full-Time</span></div>
                <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>On Campus</span></div>
            </div>
            <div className='flex items-center gap-x-2 text-light_black border-b border-light_black border-opacity-30 pt-2 pb-8'>
                <span className='text-xl text-light_black'><FaCoins /></span>
                <span className='text-light_black'>Tution: </span>
                <span className='font-semibold text-2xl px-2'>$10, 000 / year</span>
                <div className='py-3'>
                    {
                        props.isLoggedIn ?
                            <a href="https://www.studyatulawbs.com/programmes/undergraduate/bsc-hons-business-management-with-foundation-and-placement-years/?utm_source=studyportals&utm_medium=listing324053&utm_campaign=ULAWBS&utm_term=324053" target='_blank'>
                                <button className='bg-orange px-4 py-3 rounded-md w-full text-white flex items-center gap-x-2 justify-center'>
                                    <span className='text-white font-semibold'>Visit University Website</span>
                                    <div><FiUnlock className='font-bold text-lg' /></div>
                                </button>

                            </a>
                            :
                            <button className='bg-orange px-4 py-3 rounded-md w-full text-white flex items-center gap-x-2 justify-center'>
                                <span className='text-white font-semibold'>Visit University Website</span>
                                <div><FiLock className='font-bold text-lg' /></div>
                            </button>
                    }
                </div>
            </div>

        </div>
    )
}