import { FiCalendar, FiChevronsRight, FiClock, FiLock, FiMapPin, FiStar } from 'react-icons/fi';
import hero from '../assets/images/Rectangle_3.png';
import { HiOutlineCash } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs'
import { FaCoins, FaFlagCheckered, FaPaperPlane } from 'react-icons/fa';
import Overview from '../components/overview';
import { useState } from 'react';
import KeyInfo from '../components/keyInfo';
import AdmissionReq from '../components/admissionRequirement';
export default function CourseDetails() {
    const [info, setInfo] = useState('overview');

    function renderInfo(data) {
        if (data === 'overview') {
            return <Overview />
        }
        if (data === 'keyInfo') {
            return <KeyInfo />
        }
        if (data === 'requirements') {
            return <AdmissionReq />
        }
    }

    let buttons = document.querySelectorAll('.courseButton');
    var selectedButton = null;

    function buttonClick(button) {
        if (selectedButton) {
            button.classList.add('border-b-orange');
            selectedButton.classList.remove('border-b-4');
        }
        button.classList.add('border-b-orange');
        button.classList.add('border-b-4');
        selectedButton = button

    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            buttonClick(this);
        });
    }
    return (
        <>
            <div className="w-screen my-20">
                <div className="w-full">
                    <div className='xl:flex mx-auto bg-no-repeat bg-cover bg-center text-white absolute -z-10' style={{ width: '100vw', height: '600px', background: `url(${hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className='flex justify-between w-full max-w-full mx-auto'>
                        <div className=' py-20 xl:w-1/2'>
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
                            <div className='absolute top-3 right-1/2 text-white font-bold text-3xl '>Course Details</div>

                                <div className='w-full h-fit trapezium '>
                                    {/* <div className='flex w-100 text-3xl font-bold px-8 text-white text-opacity-90 items-center py-4 '>
                                        <div onClick={() => setInfo('overview')} className='courseButton py-6 text-2xl '> <button>Overview</button></div>
                                        <div onClick={() => setInfo('requirements')} className='courseButton py-6 text-2xl' id=''><button >Requirements</button></div>
                                        <div onClick={() => setInfo('keyInfo')} className='courseButton py-6 text-2xl' id='keyInfo'><button>KeyInfo</button></div>
                                        Course Details
                                    </div> */}
                                </div>

                            </section>
                            <section className='w-full mx-auto max-w-full my-6 text-light_black'>
                                <div className='w-full'>
                                    <div>
                                        <h2 className='font-semibold text-black text-2xl my-6'>About</h2>
                                    </div>
                                    <div className=''>
                                        <p> By taking the Electrical Engineering program at Toronto Metropolitan University,
                                            you’ll use your knowledge of engineering principles and practices to design,
                                            develop and implement electrical circuit relationships, electronic devices,
                                            integrated circuits, microprocessors, computers and control systems.
                                        </p>
                                    </div>
                                    <a href="" className='text-light underline py-1'>Show more</a>
                                    <div>
                                        {renderInfo(info)}
                                    </div>
                                </div>

                  
                            </section>
                        </div>
                        <aside className="w-1/2 flex flex-col py-20 items-end">
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
                                                    <button className='bg-orange px-4 py-3 rounded-md w-full text-white flex items-center gap-x-2 justify-center'>
                                                        <span className='text-white font-semibold'>Visit University Website</span>
                                                        <div><FiLock className='font-bold text-lg' /></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                        </aside>

                    </div>

                </div>

            </div>
        </>
    )
}