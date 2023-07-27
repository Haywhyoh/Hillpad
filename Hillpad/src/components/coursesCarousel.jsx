import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import CourseCard from "./coursecard";
import { degrees } from "../pages/degree2";

function CoursesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollLeft = () => {
        document.getElementById("contentB").scrollLeft -= 340;
    }
    const scrollRight = () => {
        document.getElementById("contentB").scrollLeft += 340;
    }

   


    return (
        <div className="">
          
          <div id="contentB" className="carousel flex items-center lg:justify-between overflow-x-auto scroll-smooth  no-scrollbar max-w-full gap-x-2 md:gap-x-6 lg:gap-x-6 xl:mx-0">
            {degrees.map((degree, index) => ( <div className="flex w-full max-w-full"><CourseCard className='col' key={index} prop={degree} isActive={index === currentIndex} /></div> ))}
            </div>
        </div>
    );
}

export default CoursesCarousel;