import CourseCard from "../components/coursecard";
import FlatCourseCard from "../components/flatCourseCard";
import { FiFilter } from "react-icons/fi";
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { GiConsoleController, GiSettingsKnobs } from "react-icons/gi";
import degreeType from '../data/degree_type.json';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { fetchBachelors } from "../redux/bachelorsSlice";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
export default function Courses({ props }) {
    let courseList = useSelector((state) => state.courses.coursesList);
    let countriesList = useSelector((state) => state.country.countryList);
    let bachelorsList = useSelector((state) => state.bachelors.bachelorsList);
    let mastersList = useSelector((state) => state.masters.mastersList);
    let doctoratesList = useSelector((state) => state.doctorates.doctoratesList);
    let courseCount = useSelector((state) => state.courses.count);
    let bachelorsCount = useSelector((state) => state.bachelors.count);
    let mastersCount = useSelector((state) => state.masters.count);
    let doctoratesCount = useSelector((state) => state.doctorates.count);
    let degreeTypes = useSelector((state) => state.degreeTypes.degreeTypesList);
    let baseUrl = 'https://54.221.177.186/api/academics/course/list'
    let programme = '';
    if (props) {
        programme = props.programme;
    } else {
        programme = '';
    }
    const emptyParam = { discipline: '', degree_type: [], attendance: [], format: [] }
    const [sortOrder, setSortOrder] = useState('Ascending');
    const [isChecked, setIsChecked] = useState(false);
    const [attendanceChecked, setIsAttendanceChecked] = useState(false);
    const [searchParam, setSearchParam] = useState({ discipline: '', degree_type: [], attendance: [], format: [], duration: [], tuition: '' });
    const [clickedDiscipline, setClickedDiscipline] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [countries, setCountries] = useState(countriesList);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');

    const handleCountrySelect = (country) => {
        setSelectedCountries(prevCountries => [...prevCountries, country]);
    };

    const handleCountryDeselect = (deselectedCountry) => {
        setSelectedCountries(prevCountries => prevCountries.filter(country => country !== deselectedCountry));
    };

    const handleSearchChange = (event) => {
        setSearchCountry(event.target.value);
    };

    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchCountry.toLowerCase()));

    let fetchData = async (Params = { discipine: '', degree_type: [], attendance: [], format: [], duration: [], tuition: '' }) => {
        let discipline = Params.discipline
        let degree_type = Params.degree_type
        let learning = Params.attendance
        let formatList = Params.format
        let durationList = Params.duration
        let tuitionVal = Params.tuition
        let url = `${baseUrl}?programme=${programme}&page=${currentPage + 1}&`;
        if (!programme) {
            setCourses(courseList);
            setCount(courseCount);
            return
        };
        if (programme == 'bachelors' && !discipline && !degree_type && !learning) {
            setCourses(bachelorsList)
            setCount(bachelorsCount)
            return
        }
        if (programme == 'masters' && !discipline && !degree_type && !learning) {
            setCourses(mastersList)
            setCount(mastersCount)
            return
        }
        else if (programme == 'doctorates' && !discipline && !degree_type && !learning) {
            setCourses(doctoratesList)
            setCount(doctoratesCount)
            return

        }
        if (discipline && programme) {
            url = url + `discipline=${discipline}&`
            console.log(url)
        }
        if (formatList.length > 0) {
            formatList.map((format) => {
                url = url + `course_format=${format}&`
                console.log(url)
            })
        }
        if (tuitionVal.length > 0) {
            url = url + `tuition=${tuitionVal}&`
            console.log(url)
        }
        if (durationList.length > 0) {
            durationList.map((duration) => {
                url = url + `duration=${duration}&`
                console.log(url)
            })
        }
        if (discipline && degree_type || discipline && learning) {
            if (degree_type.length > 0) {
                degree_type.map((degree) => {
                    url = url + `degree_type=${degree}&`
                })
                console.log(url)
            }
            else if (learning.length > 0) {
                learning.map((style) => {
                    url = url + `attendance=${style}&`
                })
                console.log(url)
            }
        } else if (degree_type.length > 0) {
            degree_type.map((degree) => {
                url = url + `degree_type=${degree}&`
            })
            console.log(url)
        } else if (learning.length > 0) {
            learning.map((style) => {
                url = url + `attendance=${style}&`
            })
            console.log(url)
        }

        console.log(url);
        console.log(Params)
        const res = await axios.get(url);
        const data = await res.data;
        setCourses(data.results);
        setCount(res.data.count)
        return data;
    }

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleViewChange = (event) => {
        setView(event.target.value);
    };

    const param = useParams();
    const [id, setId] = (param.id) ? useState(param.id) : useState('');
    const disciplinesList = useSelector((state) => state.disciplines.disciplinesList);

    const [count, setCount] = useState(0);
    const [courses, setCourses] = useState([]);
    const [disciplines, setDisciplines] = useState([]);

    let sortedCourses = [...courses];
    if (sortOrder === 'Ascending') {
        sortedCourses.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'Descending') {
        sortedCourses.sort((a, b) => b.name.localeCompare(a.name));
    }

    const handleTuition = () => {
        const tuitionRange = `${minTuition},${maxTuition}`;
        let anotherParam = { ...searchParam };
        anotherParam.tuition = (tuitionRange);
        setSearchParam(anotherParam);
        console.log(tuitionRange);
    }
    useEffect(() => {
        let param = searchParam
        fetchData(param);

        setDisciplines(disciplinesList);
        setCountries(countriesList)
    }, [programme, searchParam, isChecked, attendanceChecked, disciplinesList, countriesList]);

    const duration = ['Less than 1 year', '1 - 2 years', '2 - 3 years', '3 - 4 years', 'More than 4 years']
    const format = ['Full_Time', 'Part_Time']
    const formatDict = {
        Full_Time: 'FULL',
        Part_Time: 'PART'
    }
    const durationDict = {
        'Less than 1 year': '0,364',
        '1 - 2 years': '365,728',
        '2 - 3 years': '729,1095',
        '3 - 4 years': '730,1460',
        'More than 4 years': '1461,-1',
    }
    const [attendance, setAttendance] = useState({
        'Blended Learning': 'BLENDED',
        'Online Learning': 'ONLINE',
        'On Campus Learning': 'SITE'
    });

    const [showInfo, setShowInfo] = useState(false);
    const [showBach, setBachInfo] = useState(false);
    const [showMasters, setMastersInfo] = useState(false);
    const [showCountries, setShowCountries] = useState(false);
    const [showDoc, setDocInfo] = useState(false);
    const [showDuration, setDurationInfo] = useState(false);
    const [showAttendance, setAttendanceInfo] = useState(false);
    const [showFormat, setFormatInfo] = useState(true);
    const [showTuition, setTuitionInfo] = useState(true);
    const [minTuition, setMinTuition] = useState(0);
    const [maxTuition, setMaxTuition] = useState(10000); // Set this to the maximum tuition fee


    const [view, setView] = useState('List');

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
    const handlePageChange = (data) => {
        let selected = data.selected;
        setCurrentPage(selected);
        fetchData(searchParam);
    };
    const handleFormatChange = (event) => {
        let latestParam = { ...searchParam };
        if (!latestParam.format) {
            latestParam.format = [];    // Initialize attendance as an empty array if it doesn't exist
        }
        const selectedFormat = event.target.value;

        if (latestParam.format.includes(selectedFormat)) {
            latestParam.format = latestParam.format.filter((type) => type !== selectedFormat);
        } else {
            latestParam.format.push(selectedFormat);
            console.log('added format');

        }
        setSearchParam(latestParam);

    };

    const handleDurationChange = (event) => {
        let latestParam = { ...searchParam };
        if (!latestParam.duration) {
            latestParam.duration = [];    // Initialize attendance as an empty array if it doesn't exist
        }
        const selectedDuration = event.target.value;

        if (latestParam.duration.includes(selectedDuration)) {
            latestParam.duration = latestParam.duration.filter((type) => type !== selectedDuration);
        } else {
            latestParam.duration.push(selectedDuration);
            console.log('added duration');

        }
        setSearchParam(latestParam);

    };

    return (
        <div className="w-screen">
            <div className="lg:flex flex-row mt-24 justify-start w-screen max-w-full mb-10 mx-auto">
                <aside className="hidden lg:block px-8 shadow-2 py-4 lg:w-88 h-fit sticky left-0 top-24  bg-white max-w-full">
                    <div className="text-orange text-center text-xl lg:text-3xl font-bold mb-4 flex items-center gap-x-6 justify-center"><div>Filters</div> <span><GiSettingsKnobs /></span></div>
                    <div className=" h-fit ">
                        <div className="" >
                            <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setShowInfo(!showInfo); }}><div>Disciplines</div>  <button className='' >
                                {showInfo ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showInfo ? 'block py-4' : 'hidden'}>
                                {disciplines.map((discipline) => (
                                    <Link
                                        to={!programme ? `/courses/${discipline.slug}` : `/${programme}/${discipline.slug}`}
                                        onClick={() => setClickedDiscipline(discipline.id)}  // Add this line
                                    >
                                        <div
                                            className={`flex gap-x-2 py-2 text-sm text-light_black ${clickedDiscipline === discipline.id ? 'text-orange' : ''}`}  // Update this line
                                        >
                                            <div onClick={() => { setId(discipline.id); let latestParam = { ...searchParam }; latestParam.discipline = (discipline.id); setSearchParam(latestParam) }} >
                                                <span className="flex items-center gap-x-1 gap-y-2">
                                                    <i className={`fa fa-${discipline.icon}`} aria-hidden="true"></i>
                                                    <div className="text-sm"> {discipline.name} ({programme === 'bachelors' && discipline.courses_bachelors}{programme === 'masters' && discipline.courses_masters}{programme === 'doctorates' && discipline.courses_doctorates})</div>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={programme === 'bachelors' ? 'block' : 'hidden'}>
                            <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setBachInfo(!showBach); }}><div>Bachelors</div>  <button className='' >
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
                            <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setMastersInfo(!showMasters); }}><div>Masters</div>  <button className='' >
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

                            <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setDocInfo(!showDoc); }}><div>Doctorate</div>  <button className='' >
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
                            <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setDurationInfo(!showDuration); }}><div>Duration</div>  <button className='' >
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
                                                value={durationDict[duration]}
                                                checked={searchParam.duration.includes(durationDict[duration])}
                                                onChange={handleDurationChange}

                                            />
                                        </div>
                                        <label htmlFor=''> {duration}
                                        </label>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between">
                                <div>Tuition</div>
                                <button className=''>
                                    {showTuition ? <AiOutlineUp /> : <AiOutlineDown />}
                                </button>
                            </div>
                            <div className={showTuition ? 'block my-2' : 'hidden'}>
                                <div className="flex gap-x-2 gap-y-4 flex-col ">
                                    <div className="flex gap-x-2 ">
                                        <input
                                            type="range"
                                            id='minTuition'
                                            name='minTuition'
                                            min="0"
                                            max="10000" // Set this to the maximum tuition fee
                                            value={minTuition}
                                            onChange={(e) => setMinTuition(e.target.value)}
                                        />
                                        <input
                                            type="range"
                                            id='maxTuition'
                                            name='maxTuition'
                                            min="10000"
                                            max="100000" // Set this to the maximum tuition fee
                                            value={maxTuition}
                                            onChange={(e) => setMaxTuition(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex gap-x-4'>
                                        <div className="flex items-center">
                                            <span className="text-xl me-2">Min: </span> <div className="px-4 py-2 border">{minTuition} </div>
                                        </div>

                                        <div className="flex items-center">
                                            <span className="text-xl me-2">Max: </span> <div className="px-4 py-2 border">{maxTuition} </div>
                                        </div>
                                    </div>
                                    <button className="text-orange font-semibold  hover:border-2 hover:border-orange  w-28 mx-auto py-2 px-1 hover:text-orange" onClick={handleTuition}>APPLY</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setAttendanceInfo(!showAttendance); }}><div>Attendance</div>  <button className='' >
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
                <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between">
                    <div>Countries</div>  
                </div>
                <div className="w-full flex gap-x-2 flex-col">
                    {selectedCountries.map((selectedCountry, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                id={selectedCountry.code}
                                name={selectedCountry.code}
                                checked={true}
                                onChange={() => handleCountryDeselect(selectedCountry)}
                            />
                            <label htmlFor={selectedCountry.code} className="mx-3 text-lg text-light_black">{selectedCountry.name}</label>
                        </div>
                    ))}
                    <input
                        type="text"
                        placeholder="Search countries..."
                        value={searchCountry}
                        onChange={handleSearchChange}
                    />
                    {filteredCountries.map((country, index) => (
                        <div key={index} onClick={() => handleCountrySelect(country)}>
                            {country.name}
                        </div>
                    ))}
                </div>
            </div>
                        <div>
                            <div className="text-lg font-semibold py-2 flex gap-x-28 border-t border-light_black border-opacity-20 justify-between" onClick={() => { setFormatInfo(!showFormat); }}><div>Format</div>  
                            <button className=''>
                                {showFormat ? <AiOutlineUp /> : <AiOutlineDown />}
                            </button>
                            </div>
                            <div className={showFormat ? 'block border-b border-light_black border-opacity-20' : 'hidden'}>
                                {format.map((format) => (
                                    <div className="flex gap-x-2 text-xs ">
                                        <div className="flex gap-x-2">
                                            <input
                                                type="checkbox"
                                                id=''
                                                name=''
                                                value={formatDict[format]}
                                                checked={searchParam.format.includes(formatDict[format])}
                                                onChange={handleFormatChange}
                                            />
                                        </div>
                                        <label htmlFor='' className="text-xs"> {format}
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
                                    <span > View: </span>
                                    <select className="focus:outline-none p-2 rounded-md bg-white border border-light_black border-opacity-30 w-20 md:w-32" value={view}
                                        onChange={handleViewChange}>
                                        <option value='List'>List</option>

                                    </select>
                                    <div>
                                        <span>Order: </span>
                                        <select className="focus:outline-none p-2 rounded-md bg-white border  border-light_black border-opacity-30  w-20 md:w-32" value={sortOrder}
                                            onChange={handleSortChange}>
                                            <option value='Ascending'>Ascending</option>
                                            <option value='Descending'>Desc</option>
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
                            {view === 'Grid' ? <div className="flex justify-start w-full max-w-full">
                                <div className="flex gap-x-4 flex-wrap justify-start w-full">
                                    {sortedCourses.map((degree, index) => (<CourseCard key={index} prop={degree} />))}
                                </div>
                            </div> : <div className=" w-full max-w-full">
                                <div className="flex flex-col w-full gap-y-4">
                                    {sortedCourses.map((degree, index) => (<FlatCourseCard key={index} prop={degree} />))}

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
            <ReactPaginate
                previousLabel={<FaChevronLeft />}
                nextLabel={<FaChevronRight />}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(count / 20)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'flex gap-x-6 mx-auto text-center items-center justify-center mb-2 text-2xl text-orange '}
                subContainerClassName={'pages pagination'}
                activeClassName={'text-black border-2 p-2'}
            />
        </div>
    );
}
