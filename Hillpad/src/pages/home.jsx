import { BsArrowRight, BsCloudSun, BsCloudSunFill, BsHouseCheck, BsArrowLeft } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineSearch, AiFillStar, AiOutlineTwitter } from "react-icons/ai";
import { FaTractor, FaFacebookF, FaLinkedinIn, FaThermometerEmpty, FaThermometerQuarter, FaBriefcase, FaPaintBrush } from "react-icons/fa";
import hero from '../assets/images/hero-img.jpeg'
import hillpadBig from '../assets/images/hillpad-transparent.png';
import data from '../data/discipline';
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
import review1 from '../assets/images/01.jpeg';
import review2 from '../assets/images/02.jpeg';

import Modal from "../components/modal";
import Carousel from "../components/carousel";
import CoursesCarousel from "../components/coursesCarousel";
import CountryCarousel from "../components/countryCarousel";
export default function Home() {
  const disciplines = data.results;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const [isHovDiscipline, setIsHovDiscipline] = useState(false);
  const [isHovDiscipline2, setIsHovDiscipline2] = useState(false);
  const [isHovDiscipline3, setIsHovDiscipline3] = useState(false);
  const [isHovDiscipline4, setIsHovDiscipline4] = useState(false);
  const [isHovDiscipline5, setIsHovDiscipline5] = useState(false);
  const [isHovDiscipline6, setIsHovDiscipline6] = useState(false);
  const [isHovDiscipline7, setIsHovDiscipline7] = useState(false);
  const [isHovDiscipline8, setIsHovDiscipline8] = useState(false);
  const [isHovDiscipline9, setIsHovDiscipline9] = useState(false);
  const [isHovDiscipline10, setIsHovDiscipline10] = useState(false);
  const [isHovDiscipline11, setIsHovDiscipline11] = useState(false);
  const [isHovDiscipline12, setIsHovDiscipline12] = useState(false);

  const [currentDegreeIndex, setCurrentDegreeIndex] = useState(0);

  const scrollLeft = () => {
    document.getElementById("content2").scrollLeft -= 305;
  }
  const scrollRight = () => {
    document.getElementById("content2").scrollLeft += 305;
  }

  const showBar = () => {
    document.getElementById('bar').classList.add = 'lg:block';
  };


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

      {/* {header start} */}
      {/* {header end} */}

      <div className=" text-center mt-24 xl:mt-16  md:w-full w-screen max-w-full xl:flex xl:flex-col justify-center px-4 lg:px-0 mx-auto -z-30 ">

        {/* ----------------------------------- {hero start} -------------------------------------------------- */}
        <section className=" max-w-full lg:mx-auto ">
          <div className=" md:mx-0 lg:flex lg:flex-row-reverse lg:mx-2 lg:items-center max-w-full 2xl:mx-0 justify-between w-full">
         
            <div className="mx-4 my-8 md:mx-0 -z-20 2xl:mt-16 xl:mx-0 lg:w-7/12">
              <img src='./hero-img.jpeg' alt="hillpad_courses" className="" />
            </div>
            <div className="lg:text-left md:w-full lg:w-5/12 mx-4 md:mx-0 xl:mt-12">
              <h1 className="font-bold text-text_black text-3xl xs:text-3xl text-center mb-6 md:text-4xl md:font-semibold md:my-8  lg:text-4xl lg:text-left lg:mb-6 lg:block lg:my-0 xl:text-6xl 2xl:text-5xl leading-12 2xl:mt-0 2xl:mb-8 ">
                Discover <span className="text-orange"> Educational</span>{" "}
                Opportunities
              </h1>
              <p className="text-light_black mb-6 text-lg md:text-lg md:mx-0 md:my-6  lg:my-0 lg:text-base lg:mx-0 xl:pe-12 lg:w-full xl:text-lg 2xl:mt-0 2xl:mb-12">
                We make it easy to find the perfect course for you, so you can
                focus on taking your education to the next level.
              </p>
              <div className="lg:w-100 xl:w-110 rounded-lg lg:my-8">
                <div className="hidden mx-auto md:w-full md:rounded-full bg-white shadow-2 lg:block" id='bar '>
                  <form className="lg:w-100 xl:w-110 rounded-full md:flex justify-between md:px-2 lg:p-2 xl:py-2 md:rounded-full md:mx-8 md:items-center lg:mx-0  lg:left-4 2xl:left-0 bg-white z-20 border border-light_black border-opacity-10">
                    <fieldset className=" mx-2 px-2 md:border-0 lg:w-48 xl:w-80 ">
                      <div className="flex items-center gap-x-2">
                        <AiOutlineSearch className="text-light_black" />
                        <input
                          type="text "
                          className="focus:outline-none md:w-60 lg:w-48 xl:w-60 "
                          placeholder="What do you want to study?"
                        ></input>
                      </div>
                    </fieldset>
                    <fieldset className="my-0 border-s border-opacity-40 border-light_black">
                      <div></div>
                      <select className="text-left w-full px-2 text-light_black bg-white focus:outline-none lg:w-fit">
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
                    <button className="w-full md text-white bg-orange py-4 px-4 text-base font-bold rounded-3xl md:w-28 md:rounded-full">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              {/* -----------------search mobile-------------------------------- */}
              <div className="  lg:w-72  md:w-full md:rounded-full bg-white lg:hidden">
                <form className="shadow  rounded-md md:flex text-lg justify-between md:px-2 md:rounded-full md:mx-8 md:items-center lg:mx-0 2xl:left-0 bg-white z-20 border border-light_black border-opacity-10 2xl:w-6/12 2xl:mt-0">
                  <fieldset className=" border-b border-light_black border-opacity-20 mx-2 px-2 py-4 md:border-0  ">
                    <div className="flex w-28 xs:w-full items-center gap-x-2">
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
                  <div className="mx-2 xs:mx-0 ">
                  <button className="w-60 xs:w-full 2xs:w-full mb-2 md:mb-0 lg:w-full text-white bg-orange py-3 px-2 text-lg font-bold rounded-3xl md:w-28 md:rounded-full">
                    Search
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="">

            {/* ----------------search desktop------------------------------------- */}


          </div>

          {/* ----------------search desktop ------------------------------------- */}

        </section>
        {/* ----------------------------------- {hero end} -------------------------------------------------- */}

        {/* ----------------------------------- {Browse by discipline } -------------------------------------------------- */}

        <section className="my-12 w-full  lg:mx-auto max-w-full">
          <div className="flex lg:justify-between   xl:mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-5x lg:font-bold lg:text-3xl">
              Browse by <span className="text-orange">Discipline</span>
            </h2>
            <Link to='/'>
              <div className="hidden xl:flex gap-x-2 items-center text-light_black text-sm hover:text-light">
                <div>View all</div>
                <div>
                  <BsArrowRight />
                </div>
              </div>
            </Link>

          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center xl:justify-between my-6 font-medium w-full mx-auto xl:gap-y-6">


            <Link to='/discipline/Agriculture & Forestry' onMouseOver={() => setIsHovDiscipline(true)} onMouseOut={() => setIsHovDiscipline(false)} className="">
              {isHovDiscipline ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36 2xs:w-44 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow border-border_white border-y-2 border-opacity-60 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-green p-2 w-fit rounded-full mx-auto bg-opacity-100`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FaTractor />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Agriculture & Forestry</div>
                  </div>
                </div> :

                <div className="flex flejustify-center x-col items-center justify-center w-32 xs:w-36 2xs:w-44 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 border-border_white border-y-2 border-opacity-60 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-green p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-green justify-center p-1`}>
                        <FaTractor />
                      </div>
                    </div>
                    <div className="font-semibold text-sm my-2">Agriculture & Forestry</div>
                  </div>
                </div>
              }

            </Link>


            <Link to='/discipline/Applied Science & Profession' onMouseOver={() => setIsHovDiscipline2(true)} onMouseOut={() => setIsHovDiscipline2(false)}>
              {
                isHovDiscipline2 ?
                  <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44  border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                    <div className=" p-2 w-32 lg:w-fit ">
                      <div className={` bg-orange p-2 w-fit rounded-full mx-auto `}>
                        <div className={`text-3xl  flex text-white justify-center p-1`}>
                          <FaThermometerQuarter />
                        </div>
                      </div>

                      <div className="font-semibold text-sm my-2">Applied Science & Profession</div>
                    </div>
                  </div> :
                  <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44  border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                    <div className=" p-2 w-32 lg:w-fit ">
                      <div className={` bg-orange p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                        <div className={`text-3xl  flex text-orange justify-center p-1`}>
                          <FaThermometerQuarter />
                        </div>
                      </div>

                      <div className="font-semibold text-sm my-2">Applied Science & Profession</div>
                    </div>
                  </div>
              }

            </Link>

            <Link to='/discipline/Art and Design' onMouseOver={() => setIsHovDiscipline3(true)} onMouseOut={() => setIsHovDiscipline3(false)}>
              {isHovDiscipline3 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FaPaintBrush />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Art and Design</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36   2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-yellow justify-center p-1`}>
                        <FaPaintBrush />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Art and Design</div>
                  </div>
                </div>
              }
            </Link>


            <Link to='/discipline/Business Management' onMouseOver={() => setIsHovDiscipline4(true)} onMouseOut={() => setIsHovDiscipline4(false)}>
              {isHovDiscipline4 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-deep_blue p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FaBriefcase />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Business Management</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-deep_blue p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                        <FaBriefcase />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Business Management</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Computer Science and IT' onMouseOver={() => setIsHovDiscipline5(true)} onMouseOut={() => setIsHovDiscipline5(false)}>
              {isHovDiscipline5 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto `}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <HiOutlineDesktopComputer />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Computer Science and IT</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-light justify-center p-1`}>
                        <HiOutlineDesktopComputer />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Computer Science and IT</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Education and Training' onMouseOver={() => setIsHovDiscipline6(true)} onMouseOut={() => setIsHovDiscipline6(false)}>
              {isHovDiscipline6 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <RiBook2Fill />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Education and Training</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-light justify-center p-1`}>
                        <RiBook2Fill />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Education and Training</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Engineering and Technology' onMouseOver={() => setIsHovDiscipline7(true)} onMouseOut={() => setIsHovDiscipline7(false)}>
              {isHovDiscipline7 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FiSettings />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Engineering and Technology</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-light justify-center p-1`}>
                        <FiSettings />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Engineering and Technology</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Natural Sciences & Mathematics' onMouseOver={() => setIsHovDiscipline8(true)} onMouseOut={() => setIsHovDiscipline8(false)}>
              {isHovDiscipline8 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <HiOutlineCalculator />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Natural Sciences & Mathematics</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                        <HiOutlineCalculator />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Natural Sciences & Mathematics</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Hospitality, Lesiure and Sport' onMouseOver={() => setIsHovDiscipline9(true)} onMouseOut={() => setIsHovDiscipline9(false)}>
              {isHovDiscipline9 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-green p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <BsHouseCheck />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Hospitality, Lesiure and Sport</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-green p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-green justify-center p-1`}>
                        <BsHouseCheck />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Hospitality, Lesiure and Sport</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Humanities & Social Science' onMouseOver={() => setIsHovDiscipline10(true)} onMouseOut={() => setIsHovDiscipline10(false)}>
              {isHovDiscipline10 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <HiUsers />

                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Humanities & Social Science </div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-light justify-center p-1`}>
                        <HiUsers />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Humanities & Social Science </div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Journalism, Media & Communication ' onMouseOver={() => setIsHovDiscipline11(true)} onMouseOut={() => setIsHovDiscipline11(false)}>
              {isHovDiscipline11 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto `}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FiFilm />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Journalism, Media & Communication </div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-yellow justify-center p-1`}>
                        <FiFilm />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Journalism, Media & Communication </div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Environmental Sciences' onMouseOver={() => setIsHovDiscipline12(true)} onMouseOut={() => setIsHovDiscipline12(false)}>
              {isHovDiscipline12 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white md:w-52 lg:w-36 xl:w-50 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <BsCloudSunFill />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Environmental Sciences</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 md:w-52 lg:w-36 xl:w-50 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                        <BsCloudSunFill />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Environmental Sciences</div>
                  </div>
                </div>
              }
            </Link>



          </div>
        </section>

        <section className="w-full ">
          <div className=" xl:mx-auto font-bold text-2xl  md:text-3xl lg:text-5x lg:font-semibold lg:text-3xl text-left " >
            Browse By <span className="text-orange">Programme</span>
          </div>
          <div className="w-full">
            <Carousel />
          </div>
        </section>

        <section className="relative  mt-5">
          <div className="flex justify-between items-baseline">
          <div className="  text-left text-2xl font-bold my-8 md:text-3xl lg:text-5x md:my-2 lg:my-0 lg:text-3xl lg:font-semibold">
            Featured <span className="text-orange">Courses</span>
          </div>
          <Link to='/courses'>
              <div className="hidden xl:flex gap-x-2 items-center text-light_black text-sm hover:text-light">
                <div>View all</div>
                <div>
                  <BsArrowRight />
                </div>
              </div>
            </Link>
            </div>
          <button onClick={scrollLeft} className="hidden lg:block p-2 shadow rounded-full absolute -left-12 top-80"> <FiChevronLeft /></button>

          <div className="flex items-center gap-x-4">

            <div className="overflow-hidden ">
              <CoursesCarousel />
            </div>
           
          </div>
          <button onClick={scrollRight} className="hidden lg:block p-2 shadow rounded-full absolute -right-12 top-80"><FiChevronRight /></button>

        </section>
        <section className="my-14 md:flex items-center w-full md:justify-start md:gap-x-8 lg:gap-x-32 ">
          <div className="w-72 mx-auto md:mx-0 md:w-5/12 lg:w-4/12">
            <img src={hillpadBig} />
          </div>
          <div className="md:w-6/12   md:mx-0">
            <div className=" font-semibold mx-6 lg:mx-0 mt-5 text-2xl md:text-3xl md:text-left">
              Let us help you find your dream school
            </div>
            <div className="text-light_black text-center text-sm 2xs:text-lg md:text-left my-4">
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
          <div className="flex items-center justify-between xl:mx-auto">
            <div className="font-bold text-2xl mb-8 md:text-3xl lg:text-5x lg:font-semibold lg:text-3xl text-left">
              Browse By <span className="text-orange">Country</span>
            </div>
            <div className="hidden xl:flex gap-x-2 items-center text-light_black text-sm">
              <div>View all</div>
              <div>
                <BsArrowRight />
              </div>
            </div>
          </div>

          <div className="relative">
          <button onClick={scrollLeft} className="hidden xl:block p-2 shadow-2 rounded-full absolute -left-12 top-24"> <FiChevronLeft /></button>

            <CountryCarousel />
             <button onClick={scrollRight} className="hidden xl:block p-2 shadow rounded-full absolute -right-12 top-24"><FiChevronRight /></button>

          </div>
        </section>
        <section className="mt-20 mb-20  w-full">
          <div className="font-bold text-3xl mb-8 md:text-3xl text-left ">
            Reviews Across The Globe
          </div>

          <div className="flex mx-auto justify-center w-full md:hidden">
            <div className="text-left relative w-72 2xs:w-88 sm:w-76 justify-center lg:flex-row mx-auto mb-72">
            <div className="">
                <img
                  src={review1}
                  className="rounded-2xl"
                  alt="hillpad_school_review"
                />
              </div>
              <div className="shadow p-4 rounded-2xl absolute -mt-6 bg-white mx-auto">
                <div className="font-medium text-xl my-4">
                  "The best platform to finding courses!"
                </div>
                <div className="text-light_black mb-4">
                  HillPad has made it so easy for me to find the perfect course
                  for my degree. I'm so happy to have found this amazing
                  platform!
                </div>
                <div className="flex gap-2 justify-between items-start">
                  <div className="w-fit">
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
                  <div className="rounded-full shadow-2 bg-opacity-20 p-2 text-light_black">
                    <AiOutlineTwitter />
                  </div>
                  <div className="rounded-full shadow-2 bg-opacity-20 p-2 text-light_black">
                    <FaFacebookF />
                  </div>
                  <div className="rounded-full shadow-2 bg-opacity-20 p-2 text-light_black">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
             
            </div>
          </div>

          <div className="hidden md:block">
            <div className="text-left flex lg:flex-row mx-auto gap-x-4">
              <div className="w-98 md:hidden xl:block">
                <img
                  src={review1}
                  className="rounded-2xl"
                  alt="hillpad_school_review"
                />
              </div>
              <div className="flex gap-x-2">
                <div className="w-76 lg:w-98">
                  <img
                    src={review2}
                    className="rounded-2xl"
                    alt="hillpad_school_review"
                  />
                </div>
                <div className="shadow p-4 rounded-2xl bg-white mx-auto w-100 h-fit -ms-16 mt-6">
                  <div className="font-medium text-xl my-4">
                    "The best platform to finding courses!"
                  </div>
                  <div className="text-light_black mb-4 md:hidden lg:block">
                    HillPad has made it so easy for me to find the perfect course
                    for my degree. I'm so happy to have found this amazing
                    platform!
                  </div>
                  <div className="flex gap-2 justify-between items-start">
                    <div className="w-fit">
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
              </div>


            </div>

          </div>
        </section>

      </div>
    </>

  );
}