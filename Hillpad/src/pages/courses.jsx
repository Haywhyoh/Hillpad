import CourseCard from "../components/coursecard";
import FlatCourseCard from "../components/flatCourseCard";
import { FiFilter } from "react-icons/fi";
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import data from '../data/discipline';
import degreeType from '../data/degree_type.json';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function Courses() {
    const [count, setCount] = useState(0);
    const [courses, setCourses] = useState([]);

    const courseList = useSelector((state) => state.courses.coursesList);

    useEffect(() => {
        console.log('use effect called')
        if (courseList.length > 0) {
            setCourses(courseList);
            console.log('redux called')
        } else {
        axios.get('https://54.221.177.186/api/academics/course/list').then((res) => {
            let courseData = res.data.results;
            setCourses(courseData)
            setCount(res.data.count)
           
            console.log('api called')
        }).catch((err) => {
            console.log(err)
        })
    }
    }, []);

    const dispatch = useDispatch();
    dispatch({ type: 'courses/updateCourses', payload: courses });

    const disciplines = data.results;
    const degreeTypes = degreeType.results;
    const duration = ['Less than 1 year', '2 years', '3 years', '4 years', 'More than 5 years']
    const learning = ['Blended Learning', 'Online Learning', 'On Campus Learning']
    const format = ['Full Time', 'Part Time']

    const [isChecked, setIsChecked] = useState(false);
    const [showInfo, setShowInfo] = useState(true);
    const [showBach, setBachInfo] = useState(false);
    const [showMasters, setMastersInfo] = useState(false);
    const [showDoc, setDocInfo] = useState(false);
    const [showDuration, setDurationInfo] = useState(false);
    const [showAttendance, setAttendanceInfo] = useState(false);
    const [showFormat, setFormatInfo] = useState(true);
    
    const [view, setView] = useState('list');

    const [query, setQuery] = useState('');

    const searchQuery = () => {
        const new_deg = degrees.filter(degree => degree.name.toLowerCase().includes(query.toLowerCase()) || degree.school.name.toLowerCase().includes(query.toLowerCase()));
        setCourses(new_deg);

    }

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div >

            <div className="lg:flex flex-row mt-24 justify-start w-screen max-w-full mb-10">
                <aside className="hidden lg:block px-8 shadow-2 py-8 lg:w-74 max-h-screen h-screen sticky left-0 top-24  bg-white max-w-full">
                    <div className="">
                        <div className="flex items-center gap-x-2 rounded-full border border-light_black border-opacity-20 shadow p-4">
                            <div onClick={searchQuery}> <AiOutlineSearch className="text-light_black text-2xl opacity-50" /></div>
                            <input
                                type="text "
                                className="focus:outline-none md:w-72 text-sm"
                                placeholder="Search for courses"
                                onChange={(e) => { setQuery(e.target.value); searchQuery(); }}
                            ></input>
                        </div>
                    </div>

                    <div className="text-orange text-center text-xl font-bold my-4 flex items-center gap-x-6 justify-center"><div>Filters</div> <span><GiSettingsKnobs /></span></div>
                    <div className=" h-screen ">
                        <div className="" >
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setShowInfo(!showInfo); }}><div>Disciplines</div>  <button className='' >
                                {showInfo ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showInfo ? 'block py-4' : 'hidden'}>
                                {disciplines.map((discipline) => (
                                    <div className="flex gap-x-2 py-1 text-sm text-light_black">
                                        <div> <span className="flex items-center gap-x-1"><i className={`fa fa-${discipline.icon}`} aria-hidden="true"></i>
                                            <div className="text-xs"> {discipline.name} </div></span> </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                        <div >
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setBachInfo(!showBach); }}><div>Bachelors</div>  <button className='' >
                                {showBach ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showBach ? 'block py-4' : 'hidden'}>
                                {degreeTypes.filter(function (degrees) { return degrees.programme_type === 1 }).map((degree) => (
                                    <div className="flex gap-x-2 pb-1 text-sm text-light_black">
                                        <input
                                            type="checkbox"
                                            id=''
                                            name=''
                                            value=''

                                            onChange={() => handleOnChange()}
                                        />
                                        <label htmlFor=''> <span className="flex items-center gap-x-1">
                                            <div className="text-xs"> <span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div >
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setMastersInfo(!showMasters); }}><div>Masters</div>  <button className='' >
                                {showMasters ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showMasters ? 'block py-4' : 'hidden'}>
                                {degreeTypes.filter(function (degrees) { return degrees.programme_type === 2 }).map((degree) => (
                                    <div className="flex gap-x-2 pb-1 text-sm text-light_black">
                                        <input
                                            type="checkbox"
                                            id=''
                                            name=''
                                            value=''

                                        />
                                        <label htmlFor=''> <span className="flex items-center gap-x-1">
                                            <div className="text-xs"> <span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div >
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setDocInfo(!showDoc); }}><div>Doctorate</div>  <button className='' >
                                {showDoc ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showDoc ? 'block py-4' : 'hidden'}>
                                {degreeTypes.filter(function (degrees) { return degrees.programme_type === 3 }).map((degree) => (
                                    <div className="flex gap-x-2">
                                        <input
                                            type="checkbox"
                                            id=''
                                            name=''
                                            value=''

                                        />
                                        <label htmlFor=''> <span className="flex items-center gap-x-1">
                                            <div className="text-xs"><span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div >
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setDurationInfo(!showDuration); }}><div>Duration</div>  <button className='' >
                                {showDuration ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showDuration ? 'block' : 'hidden'}>

                                {duration.map((duration) => (
                                    <div className="flex gap-x-2">

                                        <div className="flex gap-x-2">
                                            <input
                                                type="checkbox"
                                                id=''
                                                name=''
                                                value=''
                                            />
                                        </div>
                                        <label htmlFor=''> {duration}
                                        </label>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div >
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setAttendanceInfo(!showAttendance); }}><div>Attendance</div>  <button className='' >
                                {showAttendance ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showAttendance ? 'block py-4' : 'hidden'}>

                                {learning.map((duration) => (
                                    <div className="flex gap-x-2">

                                        <div className="flex gap-x-2">
                                            <input
                                                type="checkbox"
                                                id=''
                                                name=''
                                                value=''
                                            />
                                        </div>
                                        <label htmlFor=''> {duration}
                                        </label>
                                    </div>

                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setFormatInfo(!showFormat); }}><div>Format</div>  <button className=''>
                                {showFormat ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showFormat ? 'block border-b border-light_black border-opacity-20' : 'hidden'}>

                                {format.map((duration) => (
                                    <div className="flex gap-x-2 text-xs ">

                                        <div className="flex gap-x-2">
                                            <input
                                                type="checkbox"
                                                id=''
                                                name=''
                                                value=''
                                            />
                                        </div>
                                        <label htmlFor='' className="text-xs"> {duration}
                                        </label>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className="my-8 hidden">
                            <button className=" text-orange border-orange border py-2 px-4 rounded-full hidden lg:block">Filter</button>
                        </div>
                    </div>


                </aside>

                <div className=" flex w-full">
                    <div className="mb-4 me-4 w-full px-4">
                        <h1 className="text-3xl font-semibold w-fit">Courses</h1>
                        <div className="w-full">
                            <div className="flex gap-x-2 justify-between md:gap-x-4 items-center text-light_black w-full">
                                <div className="flex justify-between gap-x-4 my-4 items-center w-full  lg:w-5/12">
                                    <span >Sort By: </span>
                                    <select className="focus:outline-none p-2 rounded-md bg-white border border-light_black border-opacity-30 w-20 md:w-32">
                                        <option>Courses</option>
                                        <option>School</option>
                                        <option>Tuition</option>
                                        <option>Duration</option>
                                    </select>
                                    <div>
                                        <span>Order: </span>
                                        <select className="focus:outline-none p-2 rounded-md bg-white border  border-light_black border-opacity-30  w-20 md:w-32">
                                            <option>Ascending</option>
                                            <option>Desc</option>
                                        </select>
                                    </div>


                                </div>
                                <div className="text-md text-light_black hidden md:flex gap-x-8 items-center w-7/12">
                                    <hr className=" opacity-30 w-28  md:w-40 lg:w-4/5  "></hr>
                                    <div className="flex gap-x-2">
                                        <span>{count}</span>
                                        <span>results</span>
                                    </div>

                                </div>
                            </div>
                            { view === 'grid' ? <div className="flex justify-start w-full max-w-full">
                            <div className="flex gap-x-4 flex-wrap justify-end w-full">
                                {courses.map((degree, index) => (<CourseCard key={index} prop={degree} />))}

                            </div>
                            </div> : <div className=" w-full max-w-full">
                            <div className="flex flex-col w-full gap-y-4">
                                {courses.map((degree, index) => (<FlatCourseCard key={index} prop={degree} />))}

                            </div>
                            </div>
                            }
                            
                            


                        </div>

                    </div>

                </div>

                <div className="flex gap-x-2 bg-light text-white p-3 fixed z-20 bottom-0 w-full justify-center items-center lg:hidden">
                    <div>
                        <FiFilter />
                    </div>
                    <div>Filter</div>
                </div>
            </div>
        </div>
    );
}