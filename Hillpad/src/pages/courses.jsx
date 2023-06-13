import CourseCard from "../components/coursecard";
import Header from "../components/Header";
import { FiFilter } from "react-icons/fi";
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaTractor, FaThermometerHalf, } from "react-icons/fa";
import data from '../data/discipline.json';
import degreeType from '../data/degree_type.json';

export default function Courses() {

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


    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
              <Header />

        <div className="lg:flex flex-row-reverse  max-w-8xl mx-auto">
            <div className="my-4 mx-4">
                <h1 className="text-3xl font-semibold">Courses</h1>
                <div className="">
                    <div className="flex gap-x-2 justify-between md:gap-x-4 items-center text-light_black">
                        <div className="flex justify-between gap-x-4 my-4 items-center">
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
                        <div className="text-md text-light_black hidden md:flex gap-x-8 items-center">
                            <hr className=" opacity-30 w-28  md:w-56 lg:w-88  "></hr>
                            <div>
                                <span>27</span>
                                <span>results</span>
                            </div>

                        </div>
                    </div>


                    <div className="flex gap-x-4 flex-wrap justify-center">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>


                </div>

            </div>
            <div className="hidden lg:block px-4 shadow w-72">
                <div className="mt-12">
                    <div className="flex items-center gap-x-2 rounded-full border border-light_black border-opacity-20 shadow p-4">
                        <div> <AiOutlineSearch className="text-light_black text-2xl opacity-50" /></div>
                        <input
                            type="text "
                            className="focus:outline-none md:w-72"
                            placeholder="Search for courses"
                        ></input>
                    </div>
                </div>

                <div className="text-orange text-center text-xl font-bold my-4 flex items-center gap-x-6 justify-center"><div>Filters</div> <span><GiSettingsKnobs /></span></div>
                <div className="overflow-scroll h-screen ">
                    <div className="">
                        <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between"><div>Disciplines</div>  <button className='' onClick={() => { setShowInfo(!showInfo); }}>
                            {showInfo ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                        </div>
                        <div className={showInfo ? 'block py-4' : 'hidden'}>
                        { disciplines.map((discipline) => (
                            <div className="flex gap-x-2 py-1 text-sm text-light_black">
                                <input
                                    type="checkbox"
                                    id=''
                                    name=''
                                    value=''
                                    checked=''
                                    onChange={() => handleOnChange()}
                                />
                                <label htmlFor=''> <span className="flex items-center gap-x-1"><i className={`fa fa-${discipline.icon} text-${discipline.color}`} aria-hidden="true"></i>
                                    <div> {discipline.name} </div></span> </label>
                            </div>
                        ))}
                        </div>
                        

                    </div>
                    <div>
                    <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between"><div>Bachelors</div>  <button className='' onClick={() => { setBachInfo(!showBach); }}>
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
                                    checked=''
                                    onChange={() => handleOnChange()}
                                />
                                <label htmlFor=''> <span className="flex items-center gap-x-1">
                                    <div> <span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                    <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between"><div>Masters</div>  <button className='' onClick={() => { setMastersInfo(!showMasters); }}>
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
                                    checked=''
                                    onChange={() => handleOnChange()}
                                />
                                <label htmlFor=''> <span className="flex items-center gap-x-1">
                                    <div> <span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                    <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between"><div>Doctorate</div>  <button className='' onClick={() => { setDocInfo(!showDoc); }}>
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
                                    checked=''
                                    onChange={() => handleOnChange()}
                                />
                                <label htmlFor=''> <span className="flex items-center gap-x-1">
                                    <div><span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                            </div>
                        ))}
                        </div>

                    </div>
                    <div>
                    <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between"><div>Duration</div>  <button className='' onClick={() => { setDurationInfo(!showDuration); }}>
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
                    <div>
                    <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between"><div>Attendance</div>  <button className='' onClick={() => { setAttendanceInfo(!showAttendance); }}>
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
                    <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between"><div>Format</div>  <button className='' onClick={() => { setFormatInfo(!showFormat); }}>
                            {showFormat ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                        </div>
                        <div className={showFormat ? 'block border-b border-light_black border-opacity-20' : 'hidden'}>

                        {format.map((duration) => (
                            <div className="flex gap-x-2 ">

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
                </div>

                <div>
                    <button className=" text-orange border-orange border py-2 px-4 rounded-full hidden lg:block">Filter</button>
                </div>
            </div>

            <div className="flex gap-x-2 bg-light text-white p-3 fixed z-20 bottom-0 w-full justify-center items-center lg:hidden">
                <div>
                    <FiFilter />
                </div>
                <div>Filter</div>
            </div>
        </div>
        </>
        
    );
}