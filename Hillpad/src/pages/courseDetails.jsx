import { FiCalendar, FiChevronsRight, FiClock, FiLock, FiMapPin, FiStar, FiUnlock } from 'react-icons/fi';
import hero from '../assets/images/Rectangle_3.png';
import { HiOutlineCash, HiOutlinePlusCircle } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs'
import { FaCoins, FaFlagCheckered, FaPaperPlane } from 'react-icons/fa';
import Overview from '../components/overview';
import { useState } from 'react';
import Background from '../components/background';
import AdmissionReq from '../components/admissionRequirement';
import ProjectStructure from '../components/projectStructure';
import Prefooter from '../components/preFooter';
import { Link, useLocation } from 'react-router-dom';
import { render } from 'react-dom';
export default function CourseDetails() {
    const location = useLocation();
    const props = location.state;

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

    const [info, setInfo] = useState('background');
    const [showBg, setShowBg] = useState(true);
    const [showAdmission, setshowAdmission] = useState(false)
    const [showScholarship, setShowScholarship] = useState(false)
    const [showFees, setShowFees] = useState(false)
    const [showStructure, setShowStructure] = useState(false)

    function renderInfo(info) {
        if (info === 'background') {
            return <Background prop={props.disciplines}/>
        }
        if (info === 'funding') {
            return <Background props={props}/>
        }
        if (info === 'scholarships') {
            return <Background props={props}/>
        }
        if (info === 'programmes') {
            return <ProjectStructure prop={props}/>
        }
        if (info === 'requirements') {
            return <AdmissionReq prop={props}/>
        }
    }

    let buttons = document.querySelectorAll('.courseButton');
    var selectedButton = buttons[0];

    function buttonClick(button) {
        if (selectedButton) {
            selectedButton.classList.remove('text-white');
            selectedButton.classList.remove('bg-orange');
        }
        button.classList.add('bg-orange');
        button.classList.add('text-white');
        selectedButton = button

    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            buttonClick(this);
        });
    }
    return (
        <>
            {/* ----------------------------- Desktop View  -----------------------------------*/}

            <div className="w-screen my-20 xl:px-4 hidden lg:block">
                <div className="w-full text-lg ">
                    <div className='xl:flex mx-auto bg-no-repeat bg-cover bg-center text-white absolute -z-10 ' style={{ width: '100vw', height: '600px', background: `url(${props.school.banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='bannerBg w-full ' style={{ heigth: '600px' }}>

                        </div>
                    </div>
                    <div className='flex justify-between w-full max-w-full mx-auto xl:mx-4 2xl:mx-auto'>
                        <div className=' py-20 xl:w-9/12'>
                            <section className='mx-auto flex flex-col max-w-full text-white'>
                                <div className='max-w-full w-full mx-auto mt-6 w-max-full'>
                                    <div className="w-full">
                                        <div className='text-white gap-x-4 hidden'>
                                            <div className='flex items-center gap-x-2'> <span>Courses</span><span><FiChevronsRight /></span></div>
                                            <div className='flex items-center gap-x-2'><span>Sciences</span><span><FiChevronsRight /></span></div>
                                            <div><span>Chemistry</span><span></span></div>
                                        </div>
                                        <div className='my-4 text-2xl'>
                                            <h2>{props.school.name}</h2>
                                        </div>
                                        <div className='max-w-lg'>
                                            <h1 className='text-5xl font-bold leading-tight'>
                                                {props.name}
                                            </h1>
                                        </div>
                                        <div className='mt-3'>

                                            <p>
                                                {props.about}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            <section className=' w-full mt-40 mx-auto relative hidden'>
                                <div className='absolute top-4 text-white font-bold text-3xl px-8'>Course details</div>

                                <div className='w-full h-fit trapezium '>
                                    {/* <div className='flex w-100 text-3xl font-bold px-8 text-white text-opacity-90 items-center py-4 '>
                                        <div onClick={() => setInfo('overview')} className='courseButton py-6 text-2xl '> <button>Overview</button></div>
                                        <div onClick={() => setInfo('requirements')} className='courseButton py-6 text-2xl' id=''><button >Requirements</button></div>
                                        <div onClick={() => setInfo('keyInfo')} className='courseButton py-6 text-2xl' id='keyInfo'><button>KeyInfo</button></div>
                                        Course Details
                                    </div> */}
                                </div>

                            </section>
                            <section className='w-full mx-auto max-w-full my-6 text-light_black xl:mx-4 mt-56'>
                                <div className='w-full'>
                                    <div>
                                        <h2 className='font-semibold text-black text-3xl my-6'>Course Overview</h2>
                                    </div>
                                    <div className='' dangerouslySetInnerHTML={{__html:props.overview}}>
                                        
                                    </div>
                                    <a href="" className='text-light underline py-1'>Show more</a>
                                   

                                </div>


                            </section>
                        </div>
                        <aside className="w-100 lg:flex flex-col py-20 items-end">
                            <div className='sticky' style={{ top: '12rem', zIndex: '10' }}>

                                <div className=' card shadow-2 w-88 bg-white p-4 h-fit rounded-lg text-light_black flex flex-col justify-between '>
                                    <div>
                                        <h3 className='font-semibold text-lg'>{props.school.name}</h3>
                                        <div className='text-sm'>
                                            <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>{props.school.city} {props.school.country.name}</span></div>
                                            <div className='flex items-center gap-x-2'><span><FiStar /></span><span>4.4 (53 Reviews)</span></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-x-2 text-light_black border-b border-light_black border-opacity-30 py-2'>
                                        <span className='text-xl text-light_black'><FaCoins /></span>
                                        <span className='text-light_black'>Tution: </span>
                                        <span className='font-semibold text-2xl'>{props.tuition_fee > 1 ? props.tuition_fee.toLocaleString() : 0}</span> <span> {props.tuition_currency ? props.tuition_currency.short_code.toUpperCase() : null}</span>
                                    </div>
                                    <div className='flex flex-col gap-y-2 py-2 font-semibold text-opacity-40'>
                                        <div className='flex items-center gap-x-2'><span><FiCalendar /></span><span>{props.duration} {props.duration_base}</span><span className='text-xs font-normal'>Duration</span></div>
                                        <div className='flex items-center gap-x-2'><span><FiClock /></span><span>{props.course_format.toLowerCase()}-Time</span><span className='text-xs font-normal'>Format</span></div>
                                        <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>{props.attendance === 'SITE' ? 'On-Site' : props.attendance}</span><span className='text-xs font-normal'>Attendance</span></div>
                                        <div className='flex items-center gap-x-2'><span><FaPaperPlane /></span><span>Anytime</span><span className='text-xs font-normal'>Apply Date</span></div>
                                        <div className='flex items-center gap-x-2'><span><FaFlagCheckered /></span><span>{month[props.course_dates.start_month]} {props.course_dates.start_year}</span><span className='text-xs font-normal'>Start Date</span></div>

                                    </div>
                                    <div className='py-3'>
                                        {
                                            props.isLoggedIn ?
                                                <a href={props.official_programme_website} target='_blank'>
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

                        </aside>

                    </div>
                    <section className='w-full max-w-full mx-auto xl:mx-4 2xl:mx-auto 2xl:px-4'>
                        <div className=''>
                            <h2 className='font-semibold text-light_black text-3xl my-6'>Key Information</h2>
                        </div>
                        <div className='flex'>
                            <div className='w-3/12'>

                                <div className='flex gap-y-4 flex-col text-light_black'>
                                    <div><button className='border-orange bg-orange text-white border-2 w-72 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => setInfo('background')} >Background</button></div>
                                    <div><button className='border-orange border-2 w-72 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => { setInfo('requirements') }} >Admission Requirements</button></div>
                                    <div><button className='border-orange border-2 w-72 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => setInfo('scholarships')} >Scholarships</button></div>
                                    <div><button className='border-orange border-2 w-72 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => setInfo('funding')} >Fees and Funding</button></div>
                                    <div><button className='border-orange border-2 w-72 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => setInfo('programme')} >Programme Structure</button></div>
                                </div>
                            </div>
                            <div className='shadow-2 w-9/12 border-black h-100 p-8'>
                               {
                              renderInfo(info) 
                               }
                            </div>
                        </div>
                    </section>
                    <div className='w-full max-w-full mx-auto my-10 xl:mx-4 2xl:mx-auto 2xl:px-4'>
                        <Prefooter />

                    </div>
                </div>

            </div>
            {/* ----------------------------- Mobile View  -----------------------------------*/}
            <div className='w-screen lg:hidden'>
                <div className='flex mx-auto items-center justify-center bg-no-repeat bg-cover bg-center text-white  mt-16 relative' style={{ width: '100vw', height: '400px', background: `url(${hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="flex flex-col  mt-52 w-full">
                        <div className='flex  justify-center mx-auto w-full'>

                            <div className=' card shadow-2 w-72 2xs:w-88 bg-white p-4 h-fit rounded-lg text-light_black flex flex-col justify-between '>
                                <div>
                                    <h3 className='font-semibold text-2xl'>University of Balablu</h3>
                                    <div className='text-sm'>
                                        <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>Toronto Canada</span></div>
                                        <div className='flex items-center gap-x-2'><span><FiStar /></span><span>4.4 (53 Reviews)</span></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-x-2 text-light_black border-b border-light_black border-opacity-30 py-2'>
                                    <span className='text-xl text-light_black'><FaCoins /></span>
                                    <span className='text-light_black'>Tution: </span>
                                    <span className='font-semibold text-2xl px-2'>$10, 000</span>
                                </div>
                                <div className='flex flex-col gap-y-2 py-2 font-semibold text-opacity-40'>
                                    <div className='flex items-center gap-x-2'><span><FiCalendar /></span><span>4 years</span><span className='text-xs font-normal'>Duration</span></div>
                                    <div className='flex items-center gap-x-2'><span><FiClock /></span><span>Full-Time</span><span className='text-xs font-normal'>Format</span></div>
                                    <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>On Campus</span><span className='text-xs font-normal'>Attendance</span></div>
                                    <div className='flex items-center gap-x-2'><span><FaPaperPlane /></span><span>Anytime</span><span className='text-xs font-normal'>Apply Date</span></div>
                                    <div className='flex items-center gap-x-2'><span><FaFlagCheckered /></span><span>Sep 2023</span><span className='text-xs font-normal'>Start Date</span></div>

                                </div>
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

                    </div>
                </div>

                <section className='w-full mx-2 max-w-full mt-40 text-light_black px-2'>
                    <div className='w-full'>
                        <div>
                            <h2 className='font-semibold text-black text-2xl my-6'>About Course</h2>
                        </div>
                        <div className=''>
                            <p> By taking the Electrical Engineering program at Toronto Metropolitan University,
                                you’ll use your knowledge of engineering principles and practices to design,
                                develop and implement electrical circuit relationships, electronic devices,
                                integrated circuits, microprocessors, computers and control systems.
                            </p>
                        </div>
                        <a href="" className='text-light underline py-1'>Show more</a>
                        <div className=''>
                            <Overview props={props} />

                        </div>

                    </div>


                </section>
                <section>
                    <div className='flex flex-col text-light_black text-lg font-medium'>
                        <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showBg)}>
                            <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showBg ?
                                    <Background />
                                    : null
                                }
                            </div>
                        </div>
                        <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showAdmission)}>
                            <div className='flex items-center justify-between'><div  >Admission Requirements </div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showAdmission ?
                                    <Background />
                                    : null
                                }
                            </div>
                        </div>
                        <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowScholarship(!showScholarship)}>
                            <div className='flex items-center justify-between'><div  >Scholarships</div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showScholarship ?
                                    <Background />
                                    : null
                                }
                            </div>
                        </div>
                        <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowFees(!showFees)}>
                            <div className='flex items-center justify-between'><div  >Fees and Funding </div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showFees ?
                                    <Background />
                                    : null
                                }
                            </div>
                        </div>
                        <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowStructure(!showStructure)}>
                            <div className='flex items-center justify-between'><div  >Programme Structure </div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showStructure ?
                                    <Background />
                                    : null
                                }
                            </div>
                        </div>  </div>
                </section>
                <div className='w-full  my-10 flex  justify-center px-4 '>
                        <Prefooter />

                    </div>
            </div>
        </>
    )
}