import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import newyork from '../assets/images/new-york.jpeg';
import canada from '../assets/images/san-diego.jpeg';
import belgium from '../assets/images/dallas.jpeg';
import uk from '../assets/images/chicago.jpeg';
import { FaGlobeAmericas } from "react-icons/fa";

function CountryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);


  


    return (
        <div className="">
<div>
            <div id="content3" className="carousel flex items-center lg:justify-between overflow-x-auto scroll-smooth  no-scrollbar max-w-full gap-x-2 md:gap-x-6 lg:gap-x-6 xl:mx-4">
                <div className="rounded-t-2xl  xs:ms-1  2xs:mx-0" 
                    onMouseOver={() => { const show = document.querySelector('#newyork'); show.style.display = 'block'}}
                    onMouseLeave={() => { const show = document.querySelector('#newyork'); show.style.display = 'none'}}
                    >
                    <div className="shadow rounded-2xl w-72 xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card 2xs:mx-7 sm:mx-0 border border-border_white relative ">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl bg-black" />
                        </div>
                        <div className=" hidden text-white text-xs text-left font-thin p-4 transition-all duration-1000 bg-black absolute left-0 top-0 w-full h-4/5 bg-opacity-20 rounded-t-2xl" id='newyork'>
                            <div className="flex items-center gap-x-2">
                                <FaGlobeAmericas className="text-orange"/>
                                <div className="font-semibold">
                                    Europe
                                </div>
                            </div>
                            <p className="my-4">
                            New York City, a vibrant global metropolis,
                            sboasts iconic landmarks, diverse neighborhoods, 
                            and a rich cultural scene. With its towering skyscrapers and endless energy, the city offers a unique blend of history, art, and cuisine. 
                            As a symbol of innovation and ambition, it remains an alluring destination for visitors worldwide.
                            </p>
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">NewYork</div>
                    </div>
                </div>
                <div className="rounded-t-2xl mx-2 2xs:mx-0" >
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card xs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl bg-black" />
                        </div>
                        <div className=" hidden bg-black absolute left-0 top-0 w-full h-4/5 bg-opacity-20 rounded-t-2xl" id='canada'>
                            <p className="text-white">This is just an oevrlay text</p>
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center">Canada</div>
                    </div>
                </div>
                <div className="rounded-t-2xl mx-2 2xs:mx-0">
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card xs:mx-2 2xs:mx-4 sm:mx-0  border border-border_white ">
                        <div className="rounded-2xl">
                            <img src={belgium} className="rounded-t-2xl" />
                        </div>
                        <div
                         className="py-4 font-bold text-base text-light_black text-center">Belgium</div>
                    </div>
                </div>
                <div className="rounded-t-2xl mx-2 2xs:mx-0">
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card xs:mx-2 2xs:mx-4 sm:mx-0  border border-border_white ">
                        <div className="rounded-2xl">
                            <img src={uk} className="rounded-t-2xl" />
                        </div>
                        <div
                         className="py-4 font-bold text-base text-light_black text-center">United Kingdom</div>
                    </div>
                </div>
                <div className="rounded-t-2xl mx-2 2xs:mx-0">
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card xs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">Sweden</div>
                    </div>
                </div>
              
                <div className="rounded-t-2xl mx-2 2xs:mx-0">
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card fxs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center">NewYork</div>
                    </div>
                </div>
            </div>
          

     </div>
        </div>
         
    );
}

export default CountryCarousel;