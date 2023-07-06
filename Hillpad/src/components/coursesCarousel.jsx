import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import CourseCard from "./coursecard";
import { degrees } from "../pages/degree";

function CoursesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

   


    return (
        <div className="">
          
            <div id="content2" className="carousel flex items-center justify-between overflow-x-auto scroll-smooth no-scrollbar gap-x-6">
            {degrees.map((degree, index) => ( <div className="flex"><CourseCard className='flex-1' key={index} prop={degree} isActive={index === currentIndex} /></div> ))}
            </div>
        </div>
    );
}

export default CoursesCarousel;