import { BsArrowRight, BsCloudSun, BsCloudSunFill, BsHouseCheck, BsArrowLeft, BsViewList } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineSearch, AiFillStar, AiOutlineTwitter } from "react-icons/ai";
import { FaTractor, FaFacebookF, FaLinkedinIn, FaThermometerEmpty, FaThermometerQuarter, FaBriefcase, FaPaintBrush } from "react-icons/fa";
import hillpadBig from '../assets/images/hillpad-transparent.png';
import data from '../data/discipline';
import './home.css'
import { Link } from "react-router-dom";
import { HiOutlineCalculator, HiOutlineDesktopComputer, HiUsers } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
import { FiFilm, FiSettings, FiChevronLeft, FiChevronRight, FiList, FiArrowDown, FiChevronDown } from "react-icons/fi";
import { useRef, useEffect, useState } from "react";
import { useSelector } from 'react-redux/es/hooks/useSelector'
import review1 from '../assets/images/01.jpeg';
import review2 from '../assets/images/02.jpeg';
import Carousel from "../components/carousel";
import CoursesCarousel from "../components/coursesCarousel";
import CountryCarousel from "../components/countryCarousel";
import DisciplinesList from "../components/disciplineList";
export default function Home() {
  const disciplines = data.results;

  const countries = useSelector((state) => state.country.countryList);
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

  const [searchValue, setSearchValue] = useState('');


  const [hideCountryList, setCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Where ?');
  const [selectedMobileCountry, setSelectedMobileCountry] = useState('');
  const [hideCountryMobileList, setCountryMobileList] = useState(false);

  const dropdownRef = useRef(null);

  const scrollLeft = () => {
    document.getElementById("contentB").scrollLeft -= 305;
  }
  const scrollRight = () => {
    document.getElementById("contentB").scrollLeft += 305;
  }
  const scrollLeft2 = () => {
    document.getElementById("content3").scrollLeft -= 312;
  }
  const scrollRight2 = () => {
    document.getElementById("content3").scrollLeft += 306;
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (hideCountryList && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCountryList(false);
      }
    }
  
    document.addEventListener("mousedown", checkIfClickedOutside)
  
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  
  }, [hideCountryList]);

  return (
    <>

      {/* {header start} */}
      {/* {header end} */}

      <div className=" text-center mt-24 xl:mt-16  md:w-full w-screen max-w-full xl:flex xl:flex-col justify-center px-4 lg:px-0 mx-auto -z-30 ">

        {/* ----------------------------------- {hero start} -------------------------------------------------- */}
        <section className=" max-w-full lg:mx-4 xl:me-4 xl:ms-1 2xl:mx-4  ">
          <div className=" md:mx-0 lg:flex lg:flex-row-reverse lg:mx-2 lg:items-center max-w-full 2xl:mx-0 justify-between w-full">

            <div className="mx-4 xs:mx-0 my-8 md:mx-0 -z-20 2xl:mt-16 lg:w-7/12">
              <img src='./hero-img.jpeg' alt="hillpad_courses" className="" />
            </div>
            <div className="lg:text-left md:w-full lg:w-5/12 mx-4 xs:mx-0 md:mx-0 xl:mt-12">
              <h1 className="font-bold text-text_black text-3xl xs:text-3xl text-center mb-6 md:text-4xl md:font-semibold md:my-8  lg:text-4xl lg:text-left lg:mb-6 lg:block lg:my-0 xl:text-5xl 2xl:text-5xl xl:leading-tight 2xl:mt-0 2xl:mb-8 ">
                Discover <span className="text-orange"> Educational</span>{" "}
                Opportunities
              </h1>
              <p className="text-light_black mb-6 text-lg md:text-lg md:mx-0 md:my-6  lg:my-0 lg:text-base lg:mx-0 xl:pe-12 lg:w-full xl:text-lg 2xl:mt-0 2xl:mb-12">
                We make it easy to find the perfect course for you, so you can
                focus on taking your education to the next level.
              </p>
              <div className="lg:w-100 xl:w-110 rounded-lg lg:my-8 xl:my-4 2xl:my-8">
                <div className="hidden mx-auto lg:w-100 xl:w-110  md:w-full md:rounded-full bg-white shadow-2 lg:block" id='bar '>
                  <form className="lg:w-100 xl:w-full rounded-full md:flex justify-between relative md:px-2 lg:p-2 xl:py-2 md:rounded-full md:mx-8 md:items-center lg:mx-0  lg:left-0 2xl:left-0 bg-white z-20 border border-light_black border-opacity-10">
                    <fieldset className=" mx-2 px-2 md:border-0 lg:w-40 xl:w-80 ">
                      <div className="flex items-center gap-x-2">
                        <AiOutlineSearch className="text-light_black" />
                        <input
                          type="text "
                          className="focus:outline-none text-xs xl:text-sm md:w-60 lg:w-40 xl:w-60 "
                          placeholder="What do you want to study?"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                        ></input>
                      </div>
                    </fieldset>
                    <div className="">
                      <div>
                        <div className="ps-4 lg:ps-2 flex text-xs items-center gap-x-4 text-light_black border-s border-opacity-40 xl:w-44 border-light_black" onClick={() => setCountryList(!hideCountryList)}>
                        <div>
                            <BsViewList />
                          </div>
                         <div>
                         {selectedCountry}
                          </div> 
                         <div>
                          <FiChevronDown/>
                         </div>
                        </div>
                      </div>

                        { hideCountryList &&
                        <div ref={dropdownRef} className="text-left left-80 top-16 shadow p-4 rounded-sm  max-h-44 overflow-y-scroll  my-0 w-full px-2 text-light_black bg-white focus:outline-none lg:w-40 absolute">
                          {
                            countries.map((country) => (
                              <div className="text-light_black text-xs py-2" value={country} key={country.id} onClick={() => {setSelectedCountry(country.name); setCountryList(false)}}>
                                {country.name}
                              </div>
                            ))
                          }
                          </div>
                        }
                        
                    </div>

                    <Link to={`/coursefinder/${searchValue}/${selectedCountry}/`}>
                    <button className="w-full md text-white bg-orange py-4 px-4 text-base font-bold rounded-3xl md:w-28 md:rounded-full">
                      Search
                    </button>
                    </Link>
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
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      ></input>
                    </div>
                  </fieldset>
                  <div className="relative">
  <div className="p-2 text-light_black bg-white focus:outline-none lg:w-fit cursor-pointer" onClick={() => setCountryMobileList(!hideCountryMobileList)}>
    {selectedMobileCountry || 'Where ?'}
    <FiChevronDown className="inline" />
  </div>
  { hideCountryMobileList &&
    <div className="absolute w-full bg-white shadow rounded-sm max-h-44 overflow-y-scroll">
      {
        countries.map((country) => (
          <div className="text-light_black text-xs py-2" key={country.id} onClick={() => {setSelectedMobileCountry(country.name); setCountryMobileList(false)}}>
            {country.name}
          </div>
        ))
      }
    </div>
  }
</div>
                  <div className="mx-2 xs:mx-2 ">
                  <Link to={`/coursefinder/${searchValue}/${selectedMobileCountry}/`}>
                    <button className="w-60 xs:w-full 2xs:w-full mb-2 md:mb-0 lg:w-full text-white bg-orange py-3 px-2 text-lg font-bold rounded-3xl md:w-28 md:rounded-full">
                      Search
                    </button>
                  </Link>
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

        <section className="my-12 w-full  max-w-full px-2">
          <div className="flex justify-between items-center  2xl:mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-5x lg:font-bold lg:text-3xl">
              Browse by <span className="text-orange">Discipline</span>
            </h2>
            <Link to='/discipline'>
              <div className="flex gap-x-2 items-center text-light_black text-sm hover:text-light">
                <div>View all</div>
                <div>
                  <BsArrowRight />
                </div>
              </div>
            </Link>

          </div>
          <DisciplinesList />
        </section>

        <section className="w-full ">
          <div className=" lg:mx-4  font-bold text-2xl  md:text-3xl lg:text-5x lg:font-semibold lg:text-3xl text-left " >
            Browse By <span className="text-orange">Programme</span>
          </div>
          <div className="w-full">
            <Carousel />
          </div>
        </section>

        <section className="relative  mt-5 lg:mx-4 2xl:mx-4">
          <div className="flex justify-between items-baseline">
            <div className="  text-left text-2xl font-bold my-8 md:text-3xl  md:my-2 lg:my-0 lg:text-3xl lg:font-semibold">
              Featured <span className="text-orange">Courses</span>

            </div>
            <Link to='/courses'>
              <div className="flex gap-x-2 items-center text-light_black text-sm hover:text-light">
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
        <section className="my-14 md:flex items-center w-full md:justify-start md:gap-x-8 lg:gap-x-32 xl:mx-4 ">
          <div className="w-72 mx-auto md:mx-0 md:w-5/12 lg:w-4/12">
            <img src={hillpadBig} />
          </div>
          <div className="md:w-6/12   md:mx-0">
            <div className=" font-semibold mx-6 md:mx-0 mt-5 text-2xl md:text-3xl md:text-left">
              Let us help you find your dream school
            </div>
            <div className="text-light_black text-center text-sm 2xs:text-lg md:text-left my-4">
              We provide an online platform designed to make finding and
              applying for undergraduate and postgraduate courses easy and
              efficient. With HillPad, you can conveniently access the best
              courses from leading universities around the world and unlock the
              possibilities of your future!
            </div>
            <div className=" md:float-left">
              <button className="bg-orange text-white px-8 my-6 py-4 rounded-md font-bold">
                About Us
              </button>
            </div>
          </div>
        </section>

        <section className=" w-full">
          <div className="flex items-center justify-between xl:mx-4">
            <div className="font-bold text-2xl mb-8 md:text-3xl lg:text-5x lg:font-semibold lg:text-3xl text-left">
              Browse By <span className="text-orange">Country</span>
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

          <div className="relative">
            <button onClick={scrollLeft2} className="hidden xl:block p-2 shadow-2 rounded-full absolute -left-12 top-24"> <FiChevronLeft /></button>
            <div className="xl:mx-4">
              <CountryCarousel />

            </div>
            <button onClick={scrollRight2} className="hidden xl:block p-2 shadow rounded-full absolute -right-12 top-24"><FiChevronRight /></button>

          </div>
        </section>
        <section className="mt-20 mb-20  w-full xl:mx-4 ">
          <div className="font-bold text-2xl mb-8 md:text-3xl text-left ">
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
                    <div className="text-light_black text-sm text-opacity-60">
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
                    <div className="my-2 text-light_black text-sm text-opacity-60">
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
                      <div className="my-2 text-light_black text-sm text-opacity-60">
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