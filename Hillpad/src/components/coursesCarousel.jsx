import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import CourseCard from "./coursecard";
import { degrees } from "../pages/degree";

function CoursesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

   


    return (
        <div className="relative">
          
            <div id="content2" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth gap-x-4  sm:gap-x-4 no-scrollbar">
            {degrees.map((degree, index) => ( <div className=""><CourseCard key={index} prop={degree} isActive={index === currentIndex} /></div> ))}
            </div>
        </div>
    );
}

export default CoursesCarousel;