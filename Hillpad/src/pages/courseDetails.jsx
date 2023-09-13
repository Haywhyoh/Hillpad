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
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
export default function CourseDetails() {
    const location = useLocation()
    const param = useParams();
    const slug = param.slug
    const [loading, setLoading] = useState(true)
    const user = useSelector((state) => state.user);
    const [isLoggedIn, setIsLoggedIn] = useState(user.isLoggedIn)
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get(`https://54.221.177.186/api/academics/course/detail/${slug}`).then((res) => {
            let programmeData = res.data;
            setData(programmeData);
            setLoading(false)
            setIsLoggedIn(user.isLoggedIn)
        }).catch((err) => {
            console.log(err)
        })
    }, [isLoggedIn, user.isLoggedIn]);
    console.log(data)
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
        '10': 'Oct',
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
            return <Background prop={data} />
        }
        if (info === 'requirements') {
            return <AdmissionReq prop={data} />
        }
        if (info === 'programme') {
            return <ProjectStructure prop={data} />
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
            {loading ?
                <div className="w-screen my-20 xl:px-4 lg:block flex justify-center mx-auto">
                    <div className="lds-ripple text-6xl text-light_black mx-auto w-full flex justify-center mt-40 "><div className='text-6xl text-light_black mx-auto w-full flex justify-center'></div><div className='text-6xl text-light_black mx-auto w-full flex justify-center'></div></div>
                </div>
                :
                <div>
                    {/* ----------------------------- Desktop View  -----------------------------------*/}

                    <div className="w-screen my-20 xl:px-4 hidden lg:block">
                        <div className="w-full text-lg ">
                            <div className='xl:flex mx-auto bg-no-repeat bg-cover bg-center text-white absolute -z-10 ' style={{ width: '100vw', height: '600px', background: `url(${data.school.banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='bannerBg w-full ' style={{ heigth: '600px' }}>

                                </div>
                            </div>
                            <div className='flex justify-between w-full max-w-full mx-auto xl:mx-4 2xl:mx-auto'>
                                <div className=' py-20 xl:w-9/12' >
                                    <section className='mx-auto flex flex-col max-w-full text-white ' style={{ minHeight: '800px !important' }}>
                                        <div className='max-w-full w-full mx-auto mt-6 w-max-full'>
                                            <div className="w-full">
                                                <div className='text-white gap-x-4 hidden'>
                                                    <div className='flex items-center gap-x-2'> <span>Courses</span><span><FiChevronsRight /></span></div>
                                                    <div className='flex items-center gap-x-2'><span>Sciences</span><span><FiChevronsRight /></span></div>
                                                    <div><span>Chemistry</span><span></span></div>
                                                </div>
                                                <div className='my-4 text-2xl'>
                                                    <h2>{data.school.name}</h2>
                                                </div>
                                                <div className='max-w-lg'>
                                                    <h1 className='text-5xl font-bold leading-tight'>
                                                        {data.name}
                                                    </h1>
                                                </div>
                                                <div className={data.about.length < 320 ? 'mt-3 mb-16' : 'mt-3'}>

                                                    <p>
                                                        {data.about}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </section>

                                    <section className='w-full mx-auto max-w-full my-6 text-light_black xl:mx-4 mt-56'>
                                        <div className='w-full'>
                                            <div>
                                                <h2 className='font-semibold text-black text-3xl my-6'>Course Overview</h2>
                                            </div>
                                            <div className='' dangerouslySetInnerHTML={{ __html: data.overview }}>

                                            </div>
                                            <a href="" className='text-light underline py-1'>Show more</a>


                                        </div>


                                    </section>

                                    <section className='w-full max-w-full mx-auto xl:mx-4 2xl:mx-auto 2xl:px-4'>
                                        <div className=''>
                                            <h2 className='font-semibold text-light_black text-3xl my-6'>Key Information</h2>
                                        </div>
                                        <div className='flex w-full justify-between h-fit'>
                                            <div className='w-3/12 '>

                                                <div className='flex gap-y-4 flex-col text-light_black justify-center my-auto h-full'>
                                                    <div><button className='border-orange bg-orange text-white border-2 w-60 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => setInfo('background')} >Background</button></div>
                                                    <div><button className='border-orange border-2 w-60 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => { setInfo('requirements') }} >Requirements</button></div>
                                                    {/* <div><button className='border-orange border-2 w-60 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => setInfo('scholarships')} >Scholarships</button></div> */}
                                                    {/* <div><button className='border-orange border-2 w-60 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => setInfo('funding')} >Fees and Funding</button></div> */}
                                                    <div><button className='border-orange border-2 w-60 py-3 px-4 rounded-sm courseButton font-semibold' onClick={() => setInfo('programme')} >Programme Structure</button></div>
                                                </div>
                                            </div>
                                            <div className='shadow-2 w-8/12 border-black h-100 p-8'>
                                                {
                                                    renderInfo(info)
                                                }
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <aside className="w-100 lg:flex flex-col py-20 items-end">
                                    <div className='sticky' style={{ top: '12rem', zIndex: '10' }}>

                                        <div className=' rounded-none card shadow-2 w-88 bg-white h-fit p-2 text-light_black flex flex-col justify-between '>
                                            <div className="w-88">
                                                <iframe width="350" height="190" src="https://www.youtube.com/embed/Uk4xjhq2QjE?si=dOn-PbbIEo3aTcfZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                            <div>
                                                <h3 className='font-semibold text-lg px-4'>{data.school.name}</h3>
                                                <div className='text-sm px-4'>
                                                    <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>{data.school.city} {data.school.country.name}</span></div>
                                                    <div className='flex items-center gap-x-2'><span><FiStar /></span><span>4.4 (53 Reviews)</span></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-x-2 px-4 text-light_black border-b border-light_black border-opacity-30 py-2'>
                                                <span className='text-xl text-light_black'><FaCoins /></span>
                                                <span className='text-light_black'>Tution: </span>
                                                <span className='font-semibold text-2xl'>{data.tuition_fee > 1 ? data.tuition_fee.toLocaleString() : 0}</span> <span> {data.tuition_currency ? data.tuition_currency.short_code.toUpperCase() : null}</span>
                                            </div>
                                            <div className='flex flex-col gap-y-2 py-2 px-4 font-semibold text-opacity-40'>
                                                <div className='flex items-center gap-x-2'><span><FiCalendar /></span><span>{data.duration} {data.duration_base}</span><span className='text-xs font-normal'>Duration</span></div>
                                                <div className='flex items-center gap-x-2'><span><FiClock /></span><span>{data.course_format.toLowerCase()}-Time</span><span className='text-xs font-normal'>Format</span></div>
                                                <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>{data.attendance === 'SITE' ? 'On-Site' : data.attendance}</span><span className='text-xs font-normal'>Attendance</span></div>
                                                <div className='flex items-center gap-x-2'><span><FaPaperPlane /></span><span>Anytime</span><span className='text-xs font-normal'>Apply Date</span></div>
                                                <div className='flex items-center gap-x-2'><span><FaFlagCheckered /></span><span>{month[data.course_dates.start_month]} {data.course_dates.start_year}</span><span className='text-xs font-normal'>Start Date</span></div>

                                            </div>
                                            <div className='py-3'>
                                                {
                                                    isLoggedIn ?
                                                        <a href={data.official_programme_website} target='_blank'>
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
                                            <h3 className='font-semibold text-2xl'>{data.school.name}</h3>
                                            <div className='text-sm'>
                                                <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>{data.school.city} {data.school.country.name}</span></div>
                                                <div className='flex items-center gap-x-2'><span><FiStar /></span><span>4.4 (53 Reviews)</span></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-x-2 text-light_black border-b border-light_black border-opacity-30 py-2'>
                                            <span className='text-xl text-light_black'><FaCoins /></span>
                                            <span className='text-light_black'>Tution: </span>
                                            <span className='font-semibold text-2xl px-2'>{data.tuition_fee > 1 ? data.tuition_fee.toLocaleString() : 0}</span> <span> {data.tuition_currency ? data.tuition_currency.short_code.toUpperCase() : null}</span>
                                        </div>
                                        <div className='flex flex-col gap-y-2 py-2 font-semibold text-opacity-40'>
                                            <div className='flex items-center gap-x-2'><span><FiCalendar /></span><span>{data.duration} {data.duration_base}</span><span className='text-xs font-normal'>Duration</span></div>
                                            <div className='flex items-center gap-x-2'><span><FiClock /></span><span>{data.course_format.toLowerCase()}-Time</span><span className='text-xs font-normal'>Format</span></div>
                                            <div className='flex items-center gap-x-2'><span><FiMapPin /></span><span>{data.attendance === 'SITE' ? 'On-Site' : data.attendance}</span><span className='text-xs font-normal'>Attendance</span></div>
                                            <div className='flex items-center gap-x-2'><span><FaPaperPlane /></span><span>Anytime</span><span className='text-xs font-normal'>Apply Date</span></div>
                                            <div className='flex items-center gap-x-2'><span><FaFlagCheckered /></span><span>{month[data.course_dates.start_month]} {data.course_dates.start_year}</span><span className='text-xs font-normal'>Start Date</span></div>

                                        </div>
                                        <div className='py-3'>
                                            {
                                                isLoggedIn ?
                                                    <a href={data.official_programme_website} target='_blank'>
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
                                <div className={data.about.length < 320 ? 'mt-3 mb-16' : 'mt-3'}>
                                    <p>  {data.about}
                                    </p>
                                </div>
                                <div className='w-full'>
                                    <div>
                                        <h2 className='font-semibold text-black text-3xl my-6'>Course Overview</h2>
                                    </div>
                                    <div className='' dangerouslySetInnerHTML={{ __html: data.overview }}>

                                    </div>
                                    <a href="" className='text-light underline py-1'>Show more</a>


                                </div>

                            </div>


                        </section>
                        <section>
                            <div className='flex flex-col text-light_black text-lg font-medium'>
                                <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showBg)}>
                                    <div className='flex items-center justify-between'><div  >Background </div><div><HiOutlinePlusCircle /></div></div>
                                    <div>
                                        {showBg ?
                                            <Background prop={data} />
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowBg(!showAdmission)}>
                                    <div className='flex items-center justify-between'><div  >Admission Requirements </div><div><HiOutlinePlusCircle /></div></div>
                                    <div>
                                        {showAdmission ?
                                            <Background prop={data} />
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowScholarship(!showScholarship)}>
                                    <div className='flex items-center justify-between'><div  >Scholarships</div><div><HiOutlinePlusCircle /></div></div>
                                    <div>
                                        {showScholarship ?
                                            <Background prop={data} />
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowFees(!showFees)}>
                                    <div className='flex items-center justify-between'><div  >Fees and Funding </div><div><HiOutlinePlusCircle /></div></div>
                                    <div>
                                        {showFees ?
                                            <Background prop={data} />
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className='border-t border-1 w-full py-3 px-4 border-opacity-10 ' onClick={() => setShowStructure(!showStructure)}>
                                    <div className='flex items-center justify-between'><div  >Programme Structure </div><div><HiOutlinePlusCircle /></div></div>
                                    <div>
                                        {showStructure ?
                                            <Background prop={data} />
                                            : null
                                        }
                                    </div>
                                </div>  </div>
                        </section>
                        <div className='w-full  my-10 flex  justify-center px-4 '>
                            <Prefooter />

                        </div>
                    </div>
                </div>
            }
        </>

    )
}