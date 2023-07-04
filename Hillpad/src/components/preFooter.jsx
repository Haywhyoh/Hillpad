import CountryCarousel from "./countryCarousel"
import CourseCard from "./coursecard"
import { degrees } from "../pages/degree";
import { useState } from "react";
import CoursesCarousel from "./coursesCarousel";
export default function Prefooter() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
              <section className=' '>
                <div className=" text-3xl font-bold my-6"><h2>Popular Destinations</h2></div>
               <div>
                <CountryCarousel />
               </div>
            </section>

            <div className="">
          <div id="content2" className="carousel flex items-center justify-start overflow-x-auto scroll-smooth no-scrollbar gap-x-4">
          {degrees.filter(degree => degree.id < 4 ).map((degree, index) => ( <div className=""><CourseCard key={index} prop={degree} isActive={index === currentIndex} /></div> ))}
          </div>
      </div>
        </div>
    )
}