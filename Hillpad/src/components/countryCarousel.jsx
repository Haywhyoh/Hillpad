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
        <div className="relative lg:max-w-screen-lg xl:max-w-screen-xl">
        <button onClick={scrollLeft} className="hidden xl:block p-2 shadow-2 rounded-full absolute -left-12 top-24"> <FiChevronLeft /></button>
<div>
            <div id="content3" className="carousel flex items-center lg:justify-between overflow-x-auto scroll-smooth  no-scrollbar max-w-full gap-x-2 md:gap-x-4 lg:gap-x-6 ">
                <div className="rounded-t-2xl ms-0 xs:ms-5  2xs:mx-0" 
                    onMouseOver={() => { const show = document.querySelector('#newyork'); show.style.display = 'block'}}
                    onMouseLeave={() => { const show = document.querySelector('#newyork'); show.style.display = 'none'}}
                    >
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-72 lg:w-card xs:mx-1 2xs:mx-7 sm:mx-0 border border-border_white relative ">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl bg-black" />
                        </div>
                        <div className=" hidden bg-black absolute left-0 top-0 w-full h-4/5 bg-opacity-20 rounded-t-2xl" id='newyork'>
                            <p className="text-white">This is just an oevrlay text</p>
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">NewYork</div>
                    </div>
                </div>

                <div className="rounded-t-2xl mx-2 2xs:mx-0" 
                    onMouseOver={() => { const one= document.querySelector('#canada'); one.style.display = 'block'}}
                    onMouseLeave={() => { const one = document.querySelector('#canada'); one.style.display = 'none'}}
                    >
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-72 lg:w-card  xs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl bg-black" />
                        </div>
                        <div className=" hidden bg-black absolute left-0 top-0 w-full h-4/5 bg-opacity-20 rounded-t-2xl" id='canada'>
                            <p className="text-white">This is just an oevrlay text</p>
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center">Canada</div>
                    </div>
                </div>

                <div>
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-72 lg:w-card  xs:mx-2 2xs:mx-4 sm:mx-0  border border-border_white ">
                        <div className="rounded-2xl">
                            <img src={belgium} className="rounded-t-2xl" />
                        </div>
                        <div
                         className="py-4 font-bold text-base text-light_black text-center">Belgium</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-2xlw-76 2xs:w-80 sm:w-72 md:w-72 lg:w-card  xs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white ">
                        <div className="rounded-2xl">
                            <img src={uk} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">United Kingdom</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-72 lg:w-card  xs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center ">Sweden</div>
                    </div>
                </div>
              
                <div>
                    <div className="shadow rounded-2xl w-76 2xs:w-80 sm:w-72 md:w-72 lg:w-card  fxs:mx-4 2xs:mx-4 sm:mx-0  border border-border_white">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black text-center">NewYork</div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center">
            </div>
             <button onClick={scrollRight} className="hidden xl:block p-2 shadow rounded-full absolute -right-12 top-24"><FiChevronRight /></button>


     </div>
        </div>
         
    );
}

export default CountryCarousel;