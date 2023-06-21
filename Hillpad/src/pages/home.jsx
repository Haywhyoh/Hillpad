import { BsArrowRight, BsCloudSun, BsCloudSunFill, BsHouseCheck, BsArrowLeft } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineSearch, AiFillStar, AiOutlineTwitter } from "react-icons/ai";
import { FaTractor, FaFacebookF, FaLinkedinIn, FaThermometerEmpty, FaThermometerQuarter, FaBriefcase, FaPaintBrush } from "react-icons/fa";
import bachelor from '../assets/images/bachelors.svg';
import masters from '../assets/images/masters.svg';
import doctorates from '../assets/images/doctorates.svg';
import hero from '../assets/images/hero-img.jpeg'
import hillpadBig from '../assets/images/hillpad-transparent.png';
import newyork from '../assets/images/new-york.jpeg';
import canada from '../assets/images/san-diego.jpeg';
import belgium from '../assets/images/dallas.jpeg';
import uk from '../assets/images/chicago.jpeg';
import review1 from '../assets/images/01.jpeg';
import data from '../data/discipline.json';
import './home.css'
import CourseCard from "../components/coursecard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header";
import { HiOutlineCalculator, HiOutlineDesktopComputer, HiUsers } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
import { FiFilm, FiSettings, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { degrees } from "./degree";
import Modal from "../components/modal";
export default function Home() {
  const disciplines = data.results;
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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? degrees.length - 1 : prevIndex - 1));
    console.log(currentIndex);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === degrees.length - 1 ? 0 : prevIndex + 1));
    console.log(currentIndex);
  };
  return (
    <>
      <Header />
      <div className=" text-center mt-24  md:w-full max-w-full xl:flex xl:flex-col justify-center mx-auto -z-30 ">
        <section className=" max-w-full lg:mx-auto relative">
          <div className=" md:mx-0 lg:flex lg:flex-row-reverse lg:mx-2 lg:items-center max-w-full 2xl:mx-0 justify-between w-full">
            {/* <h1 className=" hidden font-bold text-text_black text-4xl xs:text-5xl text-center mb-6 md:text-6xl md:font-semibold md:my-16 lg:hidden  ">
              Discover <span className="text-orange"> Educational</span>{" "}
              Opportunities
            </h1> */}
            <div className="mx-4 my-8 md:mx-10 -z-20 2xl:mt-16 xl:mx-0">
              <img src={hero} alt="hillpad_courses" className="" />
            </div>
            <div className="lg:text-left lg:w-full xl:w-10/12 mx-4  xl:mx-auto">
              <h1 className="font-bold text-text_black text-2xl xs:text-3xl text-center mb-6 md:text-5xl md:font-semibold md:my-16  lg:text-4xl lg:text-left lg:mb-6 lg:block lg:my-0 xl:text-6xl 2xl:text-5xl leading-12 2xl:mt-0 2xl:mb-8 ">
                Discover <span className="text-orange"> Educational</span>{" "}
                Opportunities
              </h1>
              <p className="text-light_black mb-6 text-lg md:text-2xl md:mx-10 md:my-10  lg:my-0 lg:text-base lg:mx-0 lg:w-full xl:text-lg 2xl:mt-0 2xl:mb-12">
                We make it easy to find the perfect course for you, so you can
                focus on taking your education to the next level.
              </p>
              <div className="  lg:w-72  md:w-full md:rounded-full bg-white lg:hidden">
                <form className="shadow  rounded-md md:flex text-lg justify-between md:px-2 md:rounded-full md:mx-8 md:items-center lg:mx-0 2xl:left-0 bg-white z-20 border border-light_black border-opacity-10 2xl:w-6/12 2xl:mt-0">
                  <fieldset className=" border-b border-light_black border-opacity-20 mx-2 px-2 py-4 md:border-0  ">
                    <div className="flex items-center gap-x-2">
                      <AiOutlineSearch className="text-light_black text-xl text-opacity-60" />
                      <input
                        type="text "
                        className="focus:outline-none md:w-60 "
                        placeholder="What do you want to study?"
                      ></input>
                    </div>
                  </fieldset>
                  <fieldset className="my-4 lg:border-s border-opacity-40 border-light_black">
                    <div></div>
                    <select className="text-left w-full p-2 text-light_black bg-white focus:outline-none lg:w-fit">
                      <option className="text-light_black text-opacity-10" value={"China"}>
                        Where ?
                      </option>
                      <option className="text-text_black" value={"Belgium"}>
                        Belgium
                      </option>
                      <option className="text-text_black" value={"Canada"}>
                        Canada
                      </option>
                    </select>
                  </fieldset>
                  <button className="w-60 xs:w-80 mb-2 lg:w-full text-white bg-orange py-3 px-2 text-lg font-bold rounded-3xl md:w-28 md:rounded-full">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="">
            <div className="hidden w-72 mx-auto md:w-full md:rounded-full bg-white  absolute lg:bottom-28 xl:bottom-64 lg:block">
              <form className="shadow mx-auto rounded-md md:flex justify-between md:px-2 md:rounded-full md:mx-8 md:items-center lg:mx-0 lg:absolute lg:left-4 2xl:left-0 bg-white z-20 border border-light_black border-opacity-10 2xl:w-6/12 2xl:mt-20">
                <fieldset className=" border-b border-light_black border-opacity-20 mx-2 px-2 py-4 md:border-0  ">
                  <div className="flex items-center gap-x-2">
                    <AiOutlineSearch className="text-light_black" />
                    <input
                      type="text "
                      className="focus:outline-none md:w-60 "
                      placeholder="What do you want to study?"
                    ></input>
                  </div>
                </fieldset>
                <fieldset className="my-4 border-s border-opacity-40 border-light_black">
                  <div></div>
                  <select className="text-left w-full p-2 text-light_black bg-white focus:outline-none lg:w-fit">
                    <option className="text-light_black text-opacity-10" value={"China"}>
                      Where ?
                    </option>
                    <option className="text-text_black" value={"Belgium"}>
                      Belgium
                    </option>
                    <option className="text-text_black" value={"Canada"}>
                      Canada
                    </option>
                  </select>
                </fieldset>
                <button className="w-full text-white bg-orange py-3 px-2 text-lg font-bold rounded-3xl md:w-28 md:rounded-full">
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="my-20 w-full  lg:mx-auto max-w-full">
          <div className="flex lg:justify-between mx-4  xl:mx-auto">
            <h2 className="font-bold text-2xl md:text-5xl lg:font-bold lg:text-3xl">
              Browse by <span className="text-orange">Discipline</span>
            </h2>
            <Link to='/'>
              <div className="hidden xl:flex gap-x-2 items-center text-light_black text-sm">
                <div>View all</div>
                <div>
                  <BsArrowRight />
                </div>
              </div>
            </Link>

          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center xl:justify-between my-6 font-medium w-full mx-auto">


            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-green p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-green justify-center p-1`}>
                      <FaTractor />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Agriculture & Forestry</div>
                </div>
              </div>
            </Link>


            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-orange p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-orange justify-center p-1`}>
                      <FaThermometerQuarter />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Applied Science & Profession</div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-yellow justify-center p-1`}>
                      <FaPaintBrush />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Art and Design</div>
                </div>
              </div>
            </Link>


            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-deep_blue p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                      <FaBriefcase />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Business Management</div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-light justify-center p-1`}>
                      <HiOutlineDesktopComputer />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Computer Science and IT</div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-light justify-center p-1`}>
                      <RiBook2Fill />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Education and Training</div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-light justify-center p-1`}>
                      <FiSettings />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Engineering and Technology</div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                      <HiOutlineCalculator />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Natural Sciences & Mathematics</div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-green p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-green justify-center p-1`}>
                      <BsHouseCheck />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Hospitality, Lesiure and Sport</div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-light justify-center p-1`}>
                      <HiUsers />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Humanities & Social Science </div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-yellow justify-center p-1`}>
                      <FiFilm />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Journalism, Media & Communication </div>
                </div>
              </div>
            </Link>

            <Link to='/discipline'>
              <div className="flex flex-col items-center justify-center w-32 lg:w-48 h-36 bg-white shadow-md rounded-lg">
                <div className=" p-2 w-32 lg:w-fit ">
                  <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                      <BsCloudSunFill />
                    </div>
                  </div>

                  <div className="font-semibold text-sm my-2">Environmental Sciences</div>
                </div>
              </div>
            </Link>



          </div>
        </section>

        <section className="w-full ">
          <div className="mx-4  xl:mx-auto font-bold text-2xl mb-10 md:text-5xl lg:font-semibold lg:text-3xl text-left " >
            Browse By <span className="text-orange">Programme</span>
          </div>
          <div className="flex flex-wrap justify-center xl:gap-x-10 2xl:gap-x-0 2xl:justify-between max-w-full mx-auto " >
            <div className="w-72 xl:w-84  2xl:w-1/3  py-8 px-4 " onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
            {
              isHovering ? <div className="shadow-md rounded-lg   transition-all duration-700">
                <div className=" " >
                  <div className="w-40 mx-auto">
                    <img src={bachelor} alt="bachelors_degree" />
                  </div>
                  <div className="font-bold text-xl text-center mt-6 mx-8">Bachelor's Programme</div>
                  <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
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
                  <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
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
            

            <div className="w-72 xl:w-84  2xl:w-1/3  py-8 px-4 "  onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}>
            {
              isHovering2 ? <div className="shadow-md rounded-lg   transition-all duration-300"> <div className="">
              <div className="w-40 mx-auto">
                <img src={masters} alt="masters_degree" />
              </div>
              <div className="font-bold text-xl text-center mt-6 lg:mx-8">Master's Programme</div>
              <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
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
               :  <div className="">
               <div className="w-40 mx-auto">
                 <img src={masters} alt="masters_degree" />
               </div>
               <div className="font-bold text-xl text-center mt-6 lg:mx-8">Master's Programme</div>
               <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
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

            <div className="w-72 xl:w-84  2xl:w-1/3 py-8 px-2 " onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}>
              {
              isHovering3 ? <div className="shadow-md rounded-lg   transition-all duration-700"> <div className="sm:w-full">
                <div className="w-40 mx-auto">
                  <img src={doctorates} alt="doctorates_degree" />
                </div>
                <div className="font-bold text-xl text-center mt-6 mx-8">PhD & Doctorate Studies</div>
                <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
                  Choose from more than 1000 Bachelor's programmes at
                  universities, colleges, and school worldwide
                </div>
                <div>
                <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
                    Search PhDs
                  </button>
                </div>
              </div></div>
               : <div className="sm:w-full"><div className="w-40 mx-auto">
                  <img src={doctorates} alt="doctorates_degree" />
                </div>
                <div className="font-bold text-xl text-center mt-6 mx-8">PhD & Doctorate Studies</div>
                <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
                  Choose from more than 1000 Bachelor's programmes at
                  universities, colleges, and school worldwide
                </div>
                <div>
                  <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange">
                    Search PhDs
                  </button>
                </div>
              </div>
              
          }
                
            </div>
          </div>
        </section>

        <section className="  mt-12">
          <div className="mx-4  xl:mx-auto text-left text-2xl font-bold my-8 md:text-5xl md:my-10 lg:text-3xl lg:font-semibold">
            Featured <span className="text-orange">Courses</span>
          </div>
          <div className="flex items-center">
            <button onClick={handleNextClick } className="p-2 shadow rounded-full overflow-hidden"> <FiChevronLeft /></button>
            <div className="overflow-hidden ">
            {/* style={{ transform : 'translateX(-0)'}}  */}
              <div className="w-full my-2 flex gap-x-8  justify-start transition-all transform duration-300" style={{ transform : `translateX(${-20 * currentIndex}rem)`}} >
                {degrees.map((degree, index) => ( <div className=""><CourseCard key={index} prop={degree} isActive={index === currentIndex} /></div> ))}

              </div>
             
            </div>
            <button onClick={handlePrevClick}><FiChevronRight /></button>
          </div>



        </section>
        <section className="my-14 md:flex items-center lg:gap-x-40  w-full lg:justify-between xl:justify-start">
          <div className="w-72 mx-auto md:w-4/12">
            <img src={hillpadBig} />
          </div>
          <div className="md:w-6/12 mx-4  xl:mx-auto ">
            <div className=" font-semibold mx-6 lg:mx-0 mt-5 text-2xl md:text-3xl md:text-left">
              Let us help you find your dream school
            </div>
            <div className="text-light_black text-center text-sm lg:text-lg md:text-left">
              We provide an online platform designed to make finding and
              applying for undergraduate and postgraduate courses easy and
              efficient. With HillPad, you can conveniently access the best
              courses from leading universities around the world and unlock the
              possibilities of your future!
            </div>
            <div className=" lg:float-left">
              <button className="bg-orange text-white px-8 my-6 py-4 rounded-md font-bold">
                About Us
              </button>
            </div>
          </div>
        </section>

        <section className=" w-full">
          <div className="flex items-center justify-between mx-4  xl:mx-auto">
            <div className="font-bold text-2xl mb-8 md:text-5xl lg:font-semibold lg:text-3xl text-left">
              Browse By <span className="text-orange">Country</span>
            </div>
            <div className="hidden xl:flex gap-x-2 items-center text-light_black text-sm">
              <div>View all</div>
              <div>
                <BsArrowRight />
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-x-1 gap-y-4">

            <div className="shadow rounded-b-2xl w-72 mx-2">
              <div className="rounded-2xl">
                <img src={newyork} className="rounded-t-2xl" />
              </div>
              <div className="py-4 font-bold text-base text-light_black ">NewYork</div>
            </div>
            <div className="shadow rounded-b-2xl w-72 mx-2">
              <div className="rounded-2xl">
                <img src={belgium} className="rounded-t-2xl" />
              </div>
              <div className="py-4 font-bold text-base text-light_black ">Canada</div>
            </div>
            <div className="shadow rounded-b-2xl w-72 mx-2">
              <div className="rounded-2xl">
                <img src={canada} className="rounded-t-2xl" />
              </div>
              <div className="py-4 font-bold text-base text-light_black ">Nigeria</div>
            </div>
            <div className="shadow rounded-b-2xl w-72 mx-2">
              <div className="rounded-2xl ">
                <img src={uk} className="rounded-t-2xl" />
              </div>
              <div className="py-4 font-bold text-base text-light_black ">United Kingdom</div>
            </div>
          </div>
        </section>
        <section className="mt-20 mb-96  w-full">
          <div className="font-bold text-3xl mb-8 md:text-3xl text-left mx-4">
            Reviews Across The Globe
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mx-auto justify-center w-full">
            {/* <div className="text-left relative w-72 flex flex-col justify-center lg:flex-row">
              <div className="shadow p-4 rounded-2xl absolute top-64 bg-white mx-auto">
                <div className="font-medium text-xl my-4">
                  "The best platform to finding courses!"
                </div>
                <div className="text-light_black mb-4">
                  HillPad has made it so easy for me to find the perfect course
                  for my degree. I'm so happy to have found this amazing
                  platform!
                </div>
                <div className="flex gap-2 justify-between items-start">
                  <div className="w-32">
                    <div className="text-xl font-medium ">Floyd Miles</div>
                    <div className="text-light_black text-sm">
                      University of Cambridge
                    </div>
                  </div>
                  <div>
                    <div className="flex text-yellow text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <div className="my-2 text-light_black text-sm">
                      {" "}
                      43 reviews
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-6 my-4 text-xl">
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <AiOutlineTwitter />
                  </div>
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <FaFacebookF />
                  </div>
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={review1}
                  className="rounded-2xl"
                  alt="hillpad_school_review"
                />
              </div>
            </div>
            <div className="text-left relative w-72 flex flex-col justify-center lg:flex-row">
              <div className="shadow p-4 rounded-2xl absolute top-64 bg-white mx-auto">
                <div className="font-medium text-xl my-4">
                  "The best platform to finding courses!"
                </div>
                <div className="text-light_black mb-4">
                  HillPad has made it so easy for me to find the perfect course
                  for my degree. I'm so happy to have found this amazing
                  platform!
                </div>
                <div className="flex gap-2 justify-between items-start">
                  <div className="w-32">
                    <div className="text-xl font-medium ">Floyd Miles</div>
                    <div className="text-light_black text-sm">
                      University of Cambridge
                    </div>
                  </div>
                  <div>
                    <div className="flex text-yellow text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <div className="my-2 text-light_black text-sm">
                      {" "}
                      43 reviews
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-6 my-4 text-xl">
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <AiOutlineTwitter />
                  </div>
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <FaFacebookF />
                  </div>
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={review1}
                  className="rounded-2xl"
                  alt="hillpad_school_review"
                />
              </div>
            </div> */}
            <div className="text-left relative w-72 flex flex-col justify-center lg:flex-row mx-auto">
              <div className="shadow p-4 rounded-2xl absolute top-64 bg-white mx-auto">
                <div className="font-medium text-xl my-4">
                  "The best platform to finding courses!"
                </div>
                <div className="text-light_black mb-4">
                  HillPad has made it so easy for me to find the perfect course
                  for my degree. I'm so happy to have found this amazing
                  platform!
                </div>
                <div className="flex gap-2 justify-between items-start">
                  <div className="w-32">
                    <div className="text-xl font-medium ">Floyd Miles</div>
                    <div className="text-light_black text-sm">
                      University of Cambridge
                    </div>
                  </div>
                  <div>
                    <div className="flex text-yellow text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <div className="my-2 text-light_black text-sm">
                      {" "}
                      43 reviews
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-6 my-4 text-xl">
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <AiOutlineTwitter />
                  </div>
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <FaFacebookF />
                  </div>
                  <div className="rounded-full shadow bg-opacity-20 p-2 text-light_black">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={review1}
                  className="rounded-2xl"
                  alt="hillpad_school_review"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>

  );
}