import CourseCard from "../components/coursecard";
import { FiFilter } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { FaTractor, FaThermometerHalf,  } from "react-icons/fa";
import data from '../data/discipline.json';
import degreeType from '../data/degree_type.json';

export default function Courses () {

    const disciplines = data.results;
    const degreeTypes = degreeType.results;
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
    
    return (
      <div>
        <div>
          <h1>Courses</h1>
          <div>
            <div>Sort By: </div>
            <div>
              <select>
                <option>Courses</option>
                <option>School</option>
                <option>Tuition</option>
                <option>Duration</option>
              </select>
              <select>
                <option>Asc</option>
                <option>Desc</option>
              </select>
              <div>
                <div>27</div>
                <div>results</div>
              </div>
            </div>

            <div>
              <CourseCard />
            </div>

            <div className="flex">
              <div>
                <FiFilter />
              </div>
              <div>Filter</div>
            </div>
          </div>

        </div>
        <div className="hidden lg:block">
                <div>
                    <div className="flex items-center gap-x-2">
                        <AiOutlineSearch className="text-light_black" />
                        <input
                            type="text "
                            className="focus:outline-none md:w-72"
                            placeholder="Search for courses"
                        ></input>
                    </div>
                </div>

                <div>Filters</div>

                <div>
                    <div>Disciplines</div>
                    {disciplines.map((discipline) => (
                        <div className="flex gap-x-2">
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
                <div>
                    <div>Bachelors</div>
                    { degreeTypes.filter(function (degrees) {return degrees.programme_type === 1} ).map((degree) => (
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
                           <div> <span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                    </div>
                    ))}
                    
                </div>
                <div>
                    <div>Masters</div>
                    { degreeTypes.filter(function (degrees) {return degrees.programme_type === 2} ).map((degree) => (
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
                           <div> <span>{degree.short_name ? degree.short_name : ''}</span> {degree.name} </div></span> </label>
                    </div>
                    ))}
                    
                </div>
                <div>
                    <div>Masters</div>
                    { degreeTypes.filter(function (degrees) {return degrees.programme_type === 3} ).map((degree) => (
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
        </div>
    );
}