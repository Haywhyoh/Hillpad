import CourseCard from "../components/coursecard";
import FlatCourseCard from "../components/flatCourseCard";
import { FiFilter } from "react-icons/fi";
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { GiConsoleController, GiSettingsKnobs } from "react-icons/gi";
import degreeType from '../data/degree_type.json';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { fetchBachelors } from "../redux/bachelorsSlice";
export default function Courses({ props }) {
    let baseUrl = 'https://54.221.177.186/api/academics/course/list'
    let programme = '';
    if (props) {
        programme = props.programme;
    }
    const [isChecked, setIsChecked] = useState(false);
    const [attendanceChecked, setIsAttendanceChecked] = useState(false);
    const [searchParam, setSearchParam] = useState({ discipline: '', degree_type: [], attendance: [] });

    let fetchData = async (Params = {discipine: '', degree_type: [], attendance: []}) => {
        let discipline = Params.discipline
        let degree_type = Params.degree_type
        let learning = Params.attendance
        let url = `${baseUrl}?programme=${programme}&`;

        if (discipline) {
            url = url + `discipline=${discipline}&`
            console.log(url)
        }
        if (discipline && degree_type || discipline && learning) {  
            if (degree_type.length > 0) {
                degree_type.map((degree) => {
                    url = url + `degree_type=${degree}&`
                })
                console.log(url)
            } 
            else if ( learning.length > 0) {
                learning.map((style) => {
                    url = url + `attendance=${style}&`
                })
                console.log(url)
            }
        }
        // if (discipline && degree_type && duration) {
        //     if (duration.length > 0) {
        //         duration.map((degree) => {
        //             url = url + `degree_type=${degree}&`
        //         })
        //         console.log(url)
        //     }
        // }
        console.log(url);
        console.log(Params)
        const res = await axios.get(url);
        const data = await res.data;
        setCourses(data.results);
        setCount(res.data.count)
        return data;
    }


    const param = useParams();
    const [id, setId] = (param.id) ? useState(param.id) : useState('');
    const disciplinesList = useSelector((state) => state.disciplines.disciplinesList);
    let courseList = useSelector((state) => state.courses.coursesList);
    let bachelorsList = useSelector((state) => state.bachelors.bachelorsList);
    let mastersList = useSelector((state) => state.masters.mastersList);
    let doctoratesList = useSelector((state) => state.doctorates.doctoratesList);
    let courseCount = useSelector((state) => state.courses.count);
    let bachelorsCount = useSelector((state) => state.bachelors.count);
    let mastersCount = useSelector((state) => state.masters.count);
    let doctoratesCount = useSelector((state) => state.doctorates.count);
    let degreeTypes = useSelector((state) => state.degreeTypes.degreeTypesList);

    const [count, setCount] = useState(0);
    const [courses, setCourses] = useState([]);
    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {
        let param = searchParam
        fetchData(param);    
        if (programme == 'bachelors') {
            setCourses(bachelorsList)
            setCount(bachelorsCount)
        }
        else if (programme == 'masters') {
            setCourses(mastersList)
            setCount(mastersCount)
        }
        else if (programme == 'doctorates') {
            setCourses(doctoratesList)
            setCount(doctoratesCount)
        }
        else {
            setCourses(courseList)
            setCount(courseCount)
        }
        setDisciplines(disciplinesList);
    }, [ searchParam, isChecked , attendanceChecked, disciplinesList]);
    const duration = ['Less than 1 year', '2 years', '3 years', '4 years', 'More than 5 years']
    const learning = ['Blended Learning', 'Online Learning', 'On Campus Learning']
    const format = ['Full Time', 'Part Time']
    const [attendance, setAttendance] = useState({
        'Blended Learning': 'BLENDED',
        'Online Learning': 'ONLINE',
        'On Campus Learning': 'SITE'
      });
      
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

    const handleOnChange = (event) => {
        const selectedDegreeType = parseInt(event.target.value);
        setIsChecked(!isChecked);
      
        // Create a new object with the updated degree_type array
        const newParam = {
          ...searchParam,
          degree_type: searchParam.degree_type.includes(selectedDegreeType)
            ? searchParam.degree_type.filter((type) => type !== selectedDegreeType)
            : [...searchParam.degree_type, selectedDegreeType],
        };
      
        // Set the state with the new object
        setSearchParam(newParam);
      };
      

      const handleAttendanceChange = (event) => {
        const selectedAttendance = event.target.value;
        setIsAttendanceChecked(!attendanceChecked);
      
        // Clone the current searchParam object
        let latestParam = { ...searchParam };
      
        if (!latestParam.attendance) {
          latestParam.attendance = []; // Initialize attendance as an empty array if it doesn't exist
        }
      
        if (latestParam.attendance.includes(selectedAttendance)) {
          // If selected, remove it
          latestParam.attendance = latestParam.attendance.filter((type) => type !== selectedAttendance);
          console.log('removed attendance');
        } else {
          // If not selected, add it
          latestParam.attendance.push(selectedAttendance);
          console.log('added attendance');
        }
      
        // Update the searchParam state
        setSearchParam(latestParam);
      };
      

    return (
        <div className="w-screen">
            <div className="lg:flex flex-row mt-24 justify-start w-screen max-w-full mb-10 mx-auto">
                <aside className="hidden lg:block px-8 shadow-2 py-4 lg:w-74 h-fit sticky left-0 top-24  bg-white max-w-full">
                    <div className="text-orange text-center text-xl lg:text-3xl font-bold mb-4 flex items-center gap-x-6 justify-center"><div>Filters</div> <span><GiSettingsKnobs /></span></div>
                    <div className=" h-fit ">
                        <div className="" >
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setShowInfo(!showInfo); }}><div>Disciplines</div>  <button className='' >
                                {showInfo ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showInfo ? 'block py-4' : 'hidden'}>
                                {disciplines.map((discipline) => (
                                    <Link to={!programme ? `/courses/${discipline.slug}` : `/${programme}/${discipline.slug}`}><div className="flex gap-x-2 py-1 text-sm text-light_black" >
                                        <div onClick={() => { setId(discipline.id); setSearchParam({ discipline: discipline.id, degree_type: [], attendance: []})}} >
                                            <span className="flex items-center gap-x-1"><i className={`fa fa-${discipline.icon}`} aria-hidden="true"></i>
                                                <div className="text-xs"> {discipline.name} </div></span> </div>
                                    </div>
                                    </Link>
                                ))}
                            </div>


                        </div>
                        <div className={programme === 'bachelors' ? 'block' : 'hidden'}>
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setBachInfo(!showBach); }}><div>Bachelors</div>  <button className='' >
                                {showBach ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showBach ? 'block py-4' : 'hidden'}>
                                {degreeTypes.filter(function (degrees) { return degrees.programme_type.id === 6 }).map((degree) => (
                                    <div className="flex gap-x-2 pb-1 text-sm text-light_black">
                                        <input
                                            type="checkbox"
                                            id=''
                                            name=''
                                            value={degree.id}
                                            checked={searchParam.degree_type.includes(degree.id)}
                                            onChange={handleOnChange}
                                        />
                                        <label htmlFor=''> <span className="flex items-center gap-x-1">
                                            <div className="text-xs"> <span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={programme === 'masters' ? 'block' : 'hidden'}>
                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setMastersInfo(!showMasters); }}><div>Masters</div>  <button className='' >
                                {showMasters ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showMasters ? 'block py-4' : 'hidden'}>
                                {degreeTypes.filter(function (degrees) { return degrees.programme_type.id === 5 }).map((degree) => (
                                    <div className="flex gap-x-2 pb-1 text-sm text-light_black"> <input
                                    type="checkbox"
                                    id=''
                                    name=''
                                    value={degree.id}
                                    checked={searchParam.degree_type.includes(degree.id)}
                                    onChange={handleOnChange}

                                        />
                                        <label htmlFor=''> <span className="flex items-center gap-x-1">
                                            <div className="text-xs"> <span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="doctorates" className={programme === 'doctorates' ? 'block' : 'hidden'}>

                            <div className="text-sm font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setDocInfo(!showDoc); }}><div>Doctorate</div>  <button className='' >
                                {showDoc ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showDoc ? 'block py-4' : 'hidden'}>
                                {degreeTypes.filter(function (degrees) { return degrees.programme_type.id === 4 }).map((degree) => (
                                    <div className="flex gap-x-2">
                                        <input
                                             type="checkbox"
                                             id=''
                                             name=''
                                             value={degree.id}
                                             checked={searchParam.degree_type.includes(degree.id)}
                                             onChange={handleOnChange}
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

                                {Object.keys(attendance).map((key) => (
                                    <div className="flex gap-x-2">

                                        <div className="flex gap-x-2">
                                            <input
                                                 type="checkbox"
                                                 id=''
                                                 name=''
                                                 value={attendance[key]}
                                                 checked={searchParam.attendance.includes(attendance[key])}
                                                 onChange={handleAttendanceChange}
                                            />
                                        </div>
                                        <label htmlFor=''> {key}
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
                    <div className="mb-4 w-full px-4">
                        <h1 className="text-3xl font-semibold w-fit">{programme ? programme.charAt(0).toUpperCase() + programme.slice(1) : ''} Courses</h1>
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
                            {view === 'grid' ? <div className="flex justify-start w-full max-w-full">
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
