import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import bachelor from '../assets/images/bachelors.svg';
import masters from "../assets/images/masters.svg";
import doctorates from "../assets/images/doctorates.svg";
import { Link } from "react-router-dom";
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
        if (screen.availHeight >= 414 && screen.width < 768) {
            document.getElementById("content").scrollLeft -= 400;
            console.log("small screen");

        }
        document.getElementById("content").scrollLeft -= 286;

    }
    const scrollRight = () => {
        if (screen.availHeight >= 414 && screen.width < 768) {
            document.getElementById("content").scrollLeft -= 200;
            console.log("right screen");

        }
        document.getElementById("content").scrollLeft += 286;
    }


    return (
        <div className="relative">
            <div className="hidden absolute xl:right-28 xl:bottom-0  transition-all duration-300" id='arrow'>
            <button onClick={scrollLeft} className="lg:hidden p-2 m-2 absolute top-60 left-4 shadow-2 rounded-full bg-white" >
                    <FiChevronLeft />
                </button>
                <button onClick={scrollRight} className="lg:hidden p-2  absolute top-60 left-56 m-2 shadow-2 rounded-full bg-white">
                    <FiChevronRight />
                </button>
            </div>
            <div id="content" className="carousel p-0 lg:p-4 flex  items-center justify-start md:justify-center overflow-x-auto scroll-smooth scrollbar-hide">
                <div className="">
                    <div className="w-72 xs:w-80 md:w-60 lg:w-72 2xs:w-96  xl:w-88  2xl:w-full  py-8 px-4 " onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
                        {
                            isHovering ? <div className="deepShadow rounded-lg   transition-all duration-300">
                                <div className=" xl:pt-6 p-2" >
                                    <div className="w-40 mx-auto p-2">
                                        <img src={bachelor} alt="bachelors_degree" />
                                    </div>
                                    <div className="font-bold text-xl text-center mt-6 mx-8">Bachelor's Programme</div>
                                    <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                        Choose from more than 1000 Bachelor's programmes at
                                        universities, colleges, and school worldwide
                                    </div>
                                    <Link to='/courses'>
                                        <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
                                            Search Bachelors
                                        </button>
                                    </Link>
                                </div>

                            </div> : <div className=" flex-1  transition-all duration-300">
                                <div className="xl:pt-6 p-2">
                                    <div className="w-40 mx-auto p-2">
                                        <img src={bachelor} alt="bachelors_degree" />
                                    </div>
                                    <div className="font-bold text-xl text-center mt-6 mx-8">Bachelor's Programme</div>
                                    <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                        Choose from more than 1000 Bachelor's programmes at
                                        universities, colleges, and school worldwide
                                    </div>
                                    <Link to='/courses'>
                                        <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange  hover:bg-orange mb-8 hover:text-white">                      Search Bachelors
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        }
                    </div>
                </div>
                <div>
                    <div className="w-72  xl:w-88 sm:w-72 md:w-60  xs:w-80 2xs:w-96 2xl:w-full py-8 px-4 " onMouseOver={handleMouseOver2}
                        onMouseOut={handleMouseOut2}>
                        {
                            isHovering2 ? <div className="deepShadow rounded-lg   transition-all duration-300">
                            <div className=" xl:pt-6 p-2" >
                                <div className="w-40 mx-auto p-2">
                                    <img src={masters} alt="masters_degree" />
                                </div>
                                <div className="font-bold text-xl text-center mt-6 mx-8">Master's Programme</div>
                                <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                    Choose from more than 1000 Master's programmes at
                                    universities, colleges, and school worldwide
                                </div>
                                <Link to='/courses'>
                                    <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
                                        Search Masters
                                    </button>
                                </Link>
                            </div>

                        </div>
                                : <div className=" flex-1  transition-all duration-300">
                                <div className="xl:pt-6 p-2">
                                    <div className="w-40 mx-auto p-2">
                                        <img src={masters} alt="bachelors_degree" />
                                    </div>
                                    <div className="font-bold text-xl text-center mt-6 mx-8">Master's Programme</div>
                                    <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                        Choose from more than 1000 Master's programmes at
                                        universities, colleges, and school worldwide
                                    </div>
                                    <Link to='/courses'>
                                        <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange  hover:bg-orange mb-8 hover:text-white"> Search Masters
                                        </button>
                                    </Link>
                                </div>

                            </div>

                        }

                    </div>
                </div>
                <div>
                    <div className="w-72  xl:w-88 sm:w-72 md:w-60  xs:w-80 2xs:w-96 2xl:w-full py-8 px-4 " onMouseOver={handleMouseOver3}
                        onMouseOut={handleMouseOut3}>
                        {
                            isHovering3 ? <div className="deepShadow rounded-lg   transition-all duration-300">
                            <div className=" xl:pt-6 p-2" >
                                <div className="w-40 mx-auto p-2">
                                    <img src={doctorates} alt="masters_degree" />
                                </div>
                                <div className="font-bold text-xl text-center mt-6 mx-8">Doctorate's Programme</div>
                                <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                    Choose from more than 1000 Doctorate programmes at
                                    universities, colleges, and school worldwide
                                </div>
                                <Link to='/courses'>
                                    <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
                                        Search PhDs
                                    </button>
                                </Link>
                            </div>

                        </div>
                                : <div className=" flex-1  transition-all duration-300">
                                <div className="xl:pt-6 p-2">
                                    <div className="w-40 mx-auto p-2">
                                        <img src={doctorates} alt="bachelors_degree" />
                                    </div>
                                    <div className="font-bold text-xl text-center mt-6 mx-8">Doctorate's Programme</div>
                                    <div className="text-sm text-light_black sm:p-2 lg:p-6 my-2">
                                        Choose from more than 1000 Doctorates programmes at
                                        universities, colleges, and school worldwide
                                    </div>
                                    <Link to='/courses'>
                                        <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange  hover:bg-orange mb-8 hover:text-white"> Search PhDs
                                        </button>
                                    </Link>
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