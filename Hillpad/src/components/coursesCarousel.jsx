import { useState, useEffect } from "react";
import CourseCard from "./coursecard";
import { useSelector, useDispatch } from "react-redux";


function CoursesCarousel() {
    const courseList = useSelector((state) => state.courses.coursesList);

    const [courses, setCourses] = useState([])

    useEffect(() => {
        if (courseList.length)  {
            const selectedCourses = courseList.filter((course) => course.id < 210)
            setCourses(selectedCourses)
        }
    }, [courseList]);
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
            {courses.map((degree, index) => ( <div className="flex w-full max-w-full"><CourseCard className='col' key={index} prop={degree} isActive={index === currentIndex} /></div> ))}
            </div>
        </div>
    );
}

export default CoursesCarousel;