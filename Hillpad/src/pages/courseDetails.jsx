import { FiCalendar, FiChevronsRight, FiClock, FiLock, FiMapPin, FiStar, FiUnlock } from 'react-icons/fi';
import hero from '../assets/images/Rectangle_3.png';
import { HiOutlineCash } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs'
import { FaCoins, FaFlagCheckered, FaPaperPlane } from 'react-icons/fa';
import Overview from '../components/overview';
import { useState } from 'react';
import KeyInfo from '../components/keyInfo';
import AdmissionReq from '../components/admissionRequirement';
import ProjectStructure from '../components/projectStructure';
import Prefooter from '../components/preFooter';
import { Link } from 'react-router-dom';
export default function CourseDetails({ props }) {
    const [info, setInfo] = useState('background');

    function renderInfo(data) {
        if (data === 'background') {
            return <KeyInfo />
        }
        if (data === 'funding') {
            return <KeyInfo />
        }
        if (data === 'scholarships') {
            return <KeyInfo />
        }
        if (data === 'programmes') {
            return <ProjectStructure />
        }
        if (data === 'requirements') {
            return <AdmissionReq />
        }
    }

    let buttons = document.querySelectorAll('.courseButton');
    var selectedButton = null;

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

            <div className="w-screen my-20 xl:px-4 hidden">
                <div className="w-full text-lg ">
                    <div className='xl:flex mx-auto bg-no-repeat bg-cover bg-center text-white absolute -z-10 ' style={{ width: '100vw', height: '600px', background: `url(${hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='bannerBg w-full ' style={{ heigth: '600px' }}>

                        </div>
                    </div>
                    <div className='flex justify-between w-full max-w-full mx-auto xl:mx-4 2xl:mx-auto'>
                        <div className=' py-20 xl:w-9/12'>
                            <section className='mx-auto flex flex-col max-w-full text-white'>
                                <div className='max-w-full w-full mx-auto mt-6 w-max-full'>
                                    <div className="w-full">
                                        <div className='text-white flex gap-x-4'>
                                            <div className='flex items-center gap-x-2'> <span>Courses</span><span><FiChevronsRight /></span></div>
                                            <div className='flex items-center gap-x-2'><span>Sciences</span><span><FiChevronsRight /></span></div>
                                            <div><span>Chemistry</span><span></span></div>
                                        </div>
                                        <div className='my-4 text-2xl'>
                                            <h2>University of BalaBlu</h2>
                                        </div>
                                        <div className='max-w-lg'>
                                            <h1 className='text-5xl font-bold leading-tight'>
                                                (Hons) Chemistry and Applied Sciences
                                            </h1>
                                        </div>
                                        <div className='mt-3'>

                                            <p>
                                                The chemistry course explores the fascinating world of matter and its interactions.
                                                Through engaging experiments and discussions, you will uncover the building blocks of life,
                                                understand chemical reactions, and discover how chemistry impacts our daily lives.
                                                Get -webkit-fill-availableready to unlock the secrets of atoms, molecules, and the wonders of the periodic table!
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            <section className=' w-full mt-40 mx-auto relative'>
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
                            <section className='w-full mx-auto max-w-full my-6 text-light_black xl:mx-4'>
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
                                    <div className='my-12'>
                                        <Overview props={props} />

                                    </div>

                                </div>


                            </section>
                        </div>
                        <aside className="w-100 flex flex-col py-20 items-end">
                            <div className='sticky' style={{ top: '12rem', zIndex: '10' }}>

                                <div className=' card shadow-2 w-88 bg-white p-4 h-fit rounded-lg text-light_black flex flex-col justify-between '>
                                    <div>
                                        <h3 className='font-semibold text-lg'>University of Balablu</h3>
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
                                <div>
                                    <div className="text-light_black text-base">
                                        <div>
                                            <div>
                                                <h2 className='font-semibold text-black text-2xl my-6'>Key Information</h2>
                                            </div>

                                            <div>
                                                <h3 className="text-light font-semibold text-base">Discipline</h3>
                                                <div className="my-3">
                                                    Political Sciences
                                                </div>

                                            </div>
                                            <div>
                                                <h3 className="text-light font-semibold text-base mt-8">Language</h3>
                                                <div className="my-3">
                                                    English
                                                </div>

                                            </div>
                                            <div className="font-semibold mt-8">
                                                <h3 className="text-light text-base">Dates and Deadlines</h3>
                                                <div className="my-3">
                                                    Starting October 2024
                                                </div>
                                                <div className="my-3">
                                                    Starting January 2024
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {() => renderInfo(info)}
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='w-full max-w-full mx-auto my-10 xl:mx-4 2xl:mx-auto 2xl:px-4'>
                        <Prefooter />

                    </div>
                </div>

            </div>
                {/* ----------------------------- Mobile View  -----------------------------------*/}

        </>
    )
}