import { useState, useEffect } from "react";
import CourseCard from "./coursecard";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';


function CoursesCarousel() {
    const courseList = useSelector((state) => state.courses.coursesList);

    const [courses, setCourses] = useState(courseList)

    useEffect(() => {
        axios.get('https://54.221.177.186/api/academics/course/list?programme=bachelors')
            .then(response => {
                setCourses(response.data.results);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    // useEffect(() => {
    //     if (courses.length > 0)  {
    //         const selectedCourses = courseList.filter((course) => course.country && course.country.name === "United States");
    //                     setCourses(selectedCourses)
    //                     console.log(selectedCourses)
    //     }
    // }, [courses]);
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