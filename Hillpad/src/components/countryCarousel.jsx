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
            <div id="content3" className="carousel flex items-center lg:justify-between overflow-x-auto scroll-smooth  no-scrollbar max-w-full gap-x-2 md:gap-x-6 lg:gap-x-6 ">
                <div className="rounded-t-2xl  xs:ms-1  2xs:mx-0" 
                    onMouseEnter={() => { const show = document.querySelector('#newyork'); show.style.display = 'block'}}
                    onMouseLeave={() => { const show = document.querySelector('#newyork'); show.style.display = 'none'}}>
                    <div className="shadow rounded-2xl w-72 xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card 2xs:mx-7 sm:mx-0 border border-border_white relative ">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl bg-black" />
                        </div>
                        <div className=" hidden text-white text-xs text-left font-thin p-4 transition-all duration-1000 bg-black absolute left-0 top-0 w-full h-4/5 bg-opacity-60 rounded-t-2xl" id='newyork'>
                            <div className="flex items-center gap-x-2">
                                <FaGlobeAmericas className="text-orange"/>
                                <div className="font-semibold">
                                    North America
                                </div>
                            </div>
                            <p className="my-4">
                            
                            The United States of America is a country primarily located in North America.
                            It is the world's third-largest country by both land and total area.
                            With a population of over 333 million, it is the most populous country
                            in the Americas and the third most populous in the world.
                            </p>
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">United States</div>
                    </div>
                </div>
                <div className="rounded-t-2xl mx-2 2xs:mx-0 relative">
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card xs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white"
                    onMouseEnter={() => { const show = document.querySelector('#canada'); show.style.display = 'block'}}
                    onMouseLeave={() => { const show = document.querySelector('#canada'); show.style.display = 'none'}}
                    >
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl bg-black" />
                        </div>
                        <div className=" hidden text-white text-xs text-left font-thin p-4 transition-all duration-1000 bg-black absolute left-0 top-0 h-4/5 bg-opacity-60 rounded-t-2xl" id='canada'>
                            <div className="flex items-center gap-x-2">
                                <FaGlobeAmericas className="text-orange"/>
                                <div className="font-semibold">
                                    North America
                                </div>
                            </div>
                            <p className="my-4">
                            Canada is a country in North America. 
                            Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean
                            and northward into the Arctic Ocean, covering over 9.98 million square kilometres
                            (3.85 million square miles), making it the world's second-largest country by total area.
                            </p>
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center">Canada</div>
                    </div>
                </div>
                <div className="rounded-t-2xl mx-2 2xs:mx-0 relative"
                    onMouseEnter={() => { const show = document.querySelector('#belgium'); show.style.display = 'block'}}
                    onMouseLeave={() => { const show = document.querySelector('#belgium'); show.style.display = 'none'}}>
                
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card xs:mx-2 2xs:mx-4 sm:mx-0  border border-border_white ">
                        <div className="rounded-2xl">
                            <img src={belgium} className="rounded-t-2xl" />
                        </div>
                        <div className=" hidden text-white text-xs text-left font-thin p-4 transition-all duration-1000 bg-black absolute left-0 top-0 w-full h-4/5 bg-opacity-60 rounded-t-2xl" id='belgium'>
                            <div className="flex items-center gap-x-2">
                                <FaGlobeAmericas className="text-orange"/>
                                <div className="font-semibold">
                                    Europe
                                </div>
                            </div>
                            <p className="my-4">
                            Belgium, officially the Kingdom of Belgium, is a country in Northwestern Europe.
                            The country is bordered by the Netherlands to the north,
                            Germany to the east, Luxembourg to the southeast, France to the southwest,
                            and the North Sea to the northwest. 
                            </p>
                        </div>
                        <div
                         className="py-4 font-bold text-base text-light_black text-center">Belgium</div>
                    </div>
                </div>
                <div className="rounded-t-2xl mx-2 2xs:mx-0 relative"
                onMouseEnter={() => { const show = document.querySelector('#uk'); show.style.display = 'block'}}
                onMouseLeave={() => { const show = document.querySelector('#uk'); show.style.display = 'none'}}>
                
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card xs:mx-2 2xs:mx-4 sm:mx-0  border border-border_white ">
                        <div className="rounded-2xl">
                            <img src={uk} className="rounded-t-2xl" />
                        </div>
                        <div className=" hidden text-white text-xs text-left font-thin p-4 transition-all duration-1000 bg-black absolute left-0 top-0 w-full h-4/5 bg-opacity-60 rounded-t-2xl" id='uk'>
                            <div className="flex items-center gap-x-2">
                                <FaGlobeAmericas className="text-orange"/>
                                <div className="font-semibold">
                                    Europe
                                </div>
                            </div>
                            <p className="my-4">
                                The United Kingdom is a country in Europe, off the north-western coast of the continental mainland.
                                It comprises England, Scotland, Wales and Northern Ireland.
                                Its total area is 242,495 square kilometres (93,628 sq mi),
                                with an estimated 2020 population of more than 67 million people.
                            </p>
                        </div>
                        <div
                         className="py-4 font-bold text-base text-light_black text-center">United Kingdom</div>
                    </div>
                </div>
                <div className="rounded-t-2xl mx-2 2xs:mx-0 relative">
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card xs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">Sweden</div>
                    </div>
                </div>
              
                <div className="rounded-t-2xl mx-2 2xs:mx-0 relative">
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-56 lg:w-card xl:w-73 2xl:w-card fxs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center">Nigeria</div>
                    </div>
                </div>
            </div>
          

     </div>
        </div>
         
    );
}

export default CountryCarousel;