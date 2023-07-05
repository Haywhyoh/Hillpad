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
        <div className="">
           
            <div id="content3" className="carousel flex items-center lg:justify-start overflow-x-auto scroll-smooth  no-scrollbar max-w-full gap-x-8  ">
                <div className="rounded-t-2xl">
                    <div className="shadow rounded-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 border border-border_white relative ">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl bg-black" />
                        </div>
                        <div className="bg-black absolute left-0 top-0 w-full h-4/5 bg-opacity-20 rounded-t-2xl">
                            <p className="text-white">This is just an oevrlay text</p>
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">NewYork</div>
                    </div>
                </div>

                <div>
                    <div className="shadow rounded-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center">Canada</div>
                    </div>
                </div>

                <div>
                    <div className="shadow rounded-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0  border border-border_white ">
                        <div className="rounded-2xl">
                            <img src={belgium} className="rounded-t-2xl" />
                        </div>
                        <div
                         className="py-4 font-bold text-base text-light_black text-center">Belgium</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0  border border-border_white ">
                        <div className="rounded-2xl">
                            <img src={uk} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">United Kingdom</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">Sweden</div>
                    </div>
                </div>
              
                <div>
                    <div className="shadow rounded-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center">NewYork</div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center">
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