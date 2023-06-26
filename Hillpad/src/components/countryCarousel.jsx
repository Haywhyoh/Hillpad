import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import newyork from '../assets/images/new-york.jpeg';
import canada from '../assets/images/san-diego.jpeg';
import belgium from '../assets/images/dallas.jpeg';
import uk from '../assets/images/chicago.jpeg';

function CountryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const scrollLeft = () => {
        document.getElementById("content3").scrollLeft -= 312;
    }
    const scrollRight = () => {
        document.getElementById("content3").scrollLeft += 306;
    }


    return (
        <div className="relative">
           
            <div id="content3" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  gap-x-4  sm:gap-x-8 no-scrollbar">
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black ">NewYork</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 ">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black ">Canada</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 ">
                        <div className="rounded-2xl">
                            <img src={belgium} className="rounded-t-2xl" />
                        </div>
                        <div
                         className="py-4 font-bold text-base text-light_black ">Belgium</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 ">
                        <div className="rounded-2xl">
                            <img src={uk} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black ">United Kingdom</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 ">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black ">NewYork</div>
                    </div>
                </div>
              
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 ">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black ">NewYork</div>
                    </div>
                </div>
            </div>
            <div className=" ">
         <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
             <FiChevronLeft />
         </button>
         <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
             <FiChevronRight />
             </button>

     </div>
        </div>
         
    );
}

export default CountryCarousel;