import CourseCard from "../components/coursecard";
import { FiFilter } from "react-icons/fi";
import  { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
export default function Courses () {
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
                </div>
            </div>
      </div>
    );
}