import CountryCarousel from "./countryCarousel"
import { useState } from "react";
import {BsArrowRight} from 'react-icons/bs'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import CoursesCarousel from "./coursesCarousel";
import { Link } from "react-router-dom";

export default function Prefooter() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollLeft = () => {
      document.getElementById("content2").scrollLeft -= 305;
    }
    const scrollRight = () => {
      document.getElementById("content2").scrollLeft += 305;
    }
  
    return (
        <div className="w-full">
          <section className=" w-full">
          <div className="flex items-center justify-between xl:mx-auto">
            <div className="font-bold text-2xl mb-8 md:text-3xl lg:text-5x lg:font-semibold lg:text-3xl text-left">
              Popular <span className="text-orange">Destination</span>
            </div>
            <Link to='/countries'>
            <div className="hidden xl:flex gap-x-2 items-center text-light_black text-sm">
              <div>View all</div>
              <div>
                <BsArrowRight />
              </div>
            </div>
            </Link>
          </div>
          <div className="  md:ms-0 ">
            <CountryCarousel />
          </div>
        </section>

        <section className=" relative mt-5 lg:mt-12">
        <div className="flex justify-between items-baseline">
          <div className="  text-left text-2xl font-bold my-8 md:text-3xl  md:my-2 lg:my-0 lg:text-3xl lg:font-semibold">
           Recommended <span className="text-orange">Courses</span>

          </div>
          <Link to='/courses'>
              <div className="hidden md:flex gap-x-2 items-center text-light_black text-sm hover:text-light">
                <div>Search courses</div>
                <div className="font-bold">
                  <BsArrowRight />
                </div>
              </div>
            </Link>
            </div>
          <button onClick={scrollLeft} className="hidden lg:block p-2 shadow rounded-full absolute -left-12 top-80"> <FiChevronLeft /></button>

          <div className="flex items-center">

            <div className="overflow-hidden ">
              <CoursesCarousel />
            </div>
           
          </div>
          <button onClick={scrollRight} className="hidden lg:block p-2 shadow rounded-full absolute -right-12 top-80"><FiChevronRight /></button>

        </section>
        </div>
    )
}