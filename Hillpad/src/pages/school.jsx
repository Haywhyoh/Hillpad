import { FiCalendar, FiChevronsRight, FiClock, FiLock, FiMapPin, FiStar, FiUnlock } from 'react-icons/fi';
import hero from '../assets/images/harvard.jpg';
import { HiOutlineCash, HiOutlinePlusCircle } from 'react-icons/hi';
import { FaCoins, FaFlagCheckered, FaPaperPlane, FaRainbow } from 'react-icons/fa';
import Overview from '../components/overview';
import { useEffect, useState } from 'react';
import KeyInfo from '../components/background';
import AdmissionReq from '../components/admissionRequirement';
import ProjectStructure from '../components/projectStructure';
import Prefooter from '../components/preFooter';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function School(id = 13) {
    const [school, setSchool] = useState({});
    useEffect( () => {
        const schoolDetail = axios.get(`https://54.221.177.186/api/academics/school/detail/${id}`).then(
            res => {
                const school = res.data;
                console.log(school)
                setSchool(school);
            }
        ).catch(err => {
            console.log(err)
        });
        
    }, []);

    const [info, setInfo] = useState('background');
    const [showBg, setShowBg] = useState(true);
    const [showAdmission, setshowAdmission] = useState(false)
    const [showScholarship, setShowScholarship] = useState(false)
    const [showFees, setShowFees] = useState(false)
    const [showStructure, setShowStructure] = useState(false)

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

            <div className="w-screen my-20 hidden lg:block mx-4 ">
                <div className="w-full text-lg ">
                    <div className='xl:flex mx-auto bg-no-repeat bg-cover bg-center text-white -z-10 ' style={{ width: '100vw', height: '600px', background: `url(${hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='bannerBg w-full flex flex-col justify-center mx-auto  ' style={{ heigth: '600px' }}>
                            <div className=' text-8xl font-bold  mx-auto'>
                                <Link to='/school/demo'><h2>{school.name}</h2></Link>
                            </div>
                        </div>
                    </div>

                    <section className='w-full mx-auto mb-6 text-light_black max-w-full flex justify-between'>
                        <div className='w-full xl:w-7/12'>
                            <div>
                                <div>
                                    <h2 className='font-semibold text-black text-3xl my-6'>About School</h2>
                                </div>
                                <div className='' dangerouslySetInnerHTML={{__html: school.about}}>
                                </div>
                                <a href="" className='text-light underline py-1'>Show more</a>
                                
                            </div>
                            <div className='my-6 hidden'>
                                <div className='my-6'>
                                    <h2 className='font-bold text-light_black text-3xl'>
                                        Bachelor's Programme
                                    </h2>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='my-6 hidden'>
                                <div className='my-6'>
                                    <h2 className='font-bold text-light_black text-3xl'>
                                        Master's Programme
                                    </h2>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='my-6 hidden'>
                                <div className='my-6'>
                                    <h2 className='font-bold text-light_black text-3xl'>
                                        Doctorate's Programme
                                    </h2>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className='border-t border-light_black  border-1 w-full py-3 px-4 border-opacity-30 ' onClick={() => setShowBg(!showBg)}>
                                        <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                        <div>
                                            {showBg ?
                                                <KeyInfo />
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <aside className="w-100 lg:flex flex-col py-20 items-end">
                            <div className='sticky' style={{ top: '2rem', zIndex: '10' }}>

                                <div className=' card shadow-2 w-88 bg-white p-4 h-fit rounded-lg text-light_black flex flex-col justify-between '>
                                    <div>
                                        <Link to='/school/demo'><h3 className='font-semibold text-lg'>{school.name}</h3></Link>

                                        <div className='text-sm'>
                                            <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>{school.city} </span> <span> {school.country.name}</span></div>
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
                                        <div className='flex items-center gap-x-2'><span><FaRainbow /></span><span>{school.ranking}</span><span className='text-xs font-normal'>Ranking</span></div>
                                        <div className='flex items-center gap-x-2'><span><FiClock /></span><span>323</span><span className='text-xs font-normal'>Bachelors</span></div>
                                        <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>24</span><span className='text-xs font-normal'>Master's</span></div>
                                        <div className='flex items-center gap-x-2'><span><FaPaperPlane /></span><span>{school.institution_type}</span><span className='text-xs font-normal'>Institution Type</span></div>
                                        <div className='flex items-center gap-x-2'><span><FaFlagCheckered /></span><span>Sep 2023</span><span className='text-xs font-normal'>Start Date</span></div>

                                    </div>
                                   
                                </div>
                            </div>

                        </aside>
                    </section>


                    <div className='w-full max-w-full mx-auto my-10 xl:mx-4 2xl:mx-auto '>
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
                            { 'Overview'}

                        </div>

                    </div>


                </section>
                <section>
                    <div className='flex flex-col text-light_black text-lg font-medium'>
                        <div className='border-t border-1 border-light_black w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showBg)}>
                            <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showBg ?
                                    <KeyInfo />
                                    : null
                                }
                            </div>
                        </div>
                        <div className='border-t border-1 border-light_black w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showAdmission)}>
                            <div className='flex items-center justify-between'><div  >Admission Requirements </div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showAdmission ?
                                    <KeyInfo />
                                    : null
                                }
                            </div>
                        </div>
                        <div className='border-t border-1 border-light_black w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowScholarship(!showScholarship)}>
                            <div className='flex items-center justify-between'><div  >Scholarships</div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showScholarship ?
                                    <KeyInfo />
                                    : null
                                }
                            </div>
                        </div>
                        <div className='border-t border-1 border-light_black w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowFees(!showFees)}>
                            <div className='flex items-center justify-between'><div  >Fees and Funding </div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showFees ?
                                    <KeyInfo />
                                    : null
                                }
                            </div>
                        </div>
                        <div className='border-t border-1 border-light_black w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowStructure(!showStructure)}>
                            <div className='flex items-center justify-between'><div  >Programme Structure </div><div><HiOutlinePlusCircle /></div></div>
                            <div>
                                {showStructure ?
                                    <KeyInfo />
                                    : null
                                }
                            </div>
                        </div>  </div>
                </section>
                <div className='w-full  my-10 flex max-w-full justify-center px-4 '>
                    <Prefooter />

                </div>
            </div>
        </>
    )
}