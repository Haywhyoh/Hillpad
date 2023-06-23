import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import bachelor from '../assets/images/bachelors.svg';
import masters from "../assets/images/masters.svg";
import doctorates from "../assets/images/doctorates.svg";
function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    };

    const handleMouseOver2 = () => {
        setIsHovering2(true);

    };

    const handleMouseOver3 = () => {
        setIsHovering3(true);

    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };
    const handleMouseOut3 = () => {
        setIsHovering3(false);
    };

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 286;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 286;
    }


    return (
        <div className="relative">
            <div className="absolute right-28 bottom-0 ">
                <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronLeft />
                </button>
                <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronRight />
                </button>
            </div>
            <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                <div>
                    <div className="w-72 xl:w-84  2xl:w-full  py-8 px-4 " onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
                        {
                            isHovering ? <div className="shadow-md rounded-lg   transition-all duration-700">
                                <div className=" " >
                                    <div className="w-40 mx-auto">
                                        <img src={bachelor} alt="bachelors_degree" />
                                    </div>
                                    <div className="font-bold text-xl text-center mt-6 mx-8">Bachelor's Programme</div>
                                    <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                        Choose from more than 1000 Bachelor's programmes at
                                        universities, colleges, and school worldwide
                                    </div>
                                    <div>
                                        <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
                                            Search Bachelors
                                        </button>
                                    </div>
                                </div>

                            </div> : <div className="   transition-all duration-700">
                                <div className="">
                                    <div className="w-40 mx-auto">
                                        <img src={bachelor} alt="bachelors_degree" />
                                    </div>
                                    <div className="font-bold text-xl text-center mt-6 mx-8">Bachelor's Programme</div>
                                    <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                        Choose from more than 1000 Bachelor's programmes at
                                        universities, colleges, and school worldwide
                                    </div>
                                    <div>
                                        <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange  hover:bg-orange mb-8 hover:text-white">                      Search Bachelors
                                        </button>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="w-72 xl:w-84  2xl:w-full py-8 px-4 " onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                        {
                            isHovering2 ? <div className="shadow-md rounded-lg   transition-all duration-300"> <div className="sm:w-full">
                                <div className="w-40 mx-auto">
                                    <img src={masters} alt="masters_degree" />
                                </div>
                                <div className="font-bold text-xl text-center mt-6 lg:mx-8">Master's Programme</div>
                                <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                    Choose from more than 1000 Master's programmes at
                                    universities, colleges, and school worldwide
                                </div>
                                <div>
                                    <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
                                        Search Masters
                                    </button>
                                </div>
                            </div>
                            </div>
                                : <div className="">
                                    <div className="w-40 mx-auto">
                                        <img src={masters} alt="masters_degree" />
                                    </div>
                                    <div className="font-bold text-xl text-center mt-6 lg:mx-8">Master's Programme</div>
                                    <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                        Choose from more than 1000 Master's programmes at
                                        universities, colleges, and school worldwide
                                    </div>
                                    <div>
                                        <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange mb-8 ">
                                            Search Masters
                                        </button>
                                    </div>
                                </div>
                        }

                    </div>

                </div>
                <div>
                    <div className="w-72 xl:w-84  2xl:w-full py-8 px-4 " onMouseOver={handleMouseOver3}
                        onMouseOut={handleMouseOut3}>
                        {
                            isHovering3 ? <div className="shadow-md rounded-lg   transition-all duration-700"> <div className="sm:w-full">
                                <div className="w-40 mx-auto">
                                    <img src={doctorates} alt="doctorates_degree" />
                                </div>
                                <div className="font-bold text-xl text-center mt-6 mx-8">PhD & Doctorate Studies</div>
                                <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                    Choose from more than 1000 Bachelor's programmes at
                                    universities, colleges, and school worldwide
                                </div>
                                <div>
                                    <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8  bg-orange text-white">
                                        Search PhDs
                                    </button>
                                </div>
                            </div></div>
                                : <div className="sm:w-full"><div className="w-40 mx-auto">
                                    <img src={doctorates} alt="doctorates_degree" />
                                </div>
                                    <div className="font-bold text-xl text-center mt-6 mx-8">PhD & Doctorate Studies</div>
                                    <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                        Choose from more than 1000 Bachelor's programmes at
                                        universities, colleges, and school worldwide
                                    </div>
                                    <div>
                                        <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 text-orange">
                                            Search PhDs
                                        </button>
                                    </div>
                                </div>

                        }

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Carousel;