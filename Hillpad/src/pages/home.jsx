import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineSearch, AiFillStar , AiOutlineTwitter} from "react-icons/ai";

import { FaTractor, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import bachelor from '../assets/images/bachelors.svg';
import masters from '../assets/images/masters.svg';
import doctorates from '../assets/images/doctorates.svg';
import hero from '../assets/images/hero-img.jpeg'
import hillpadBig from '../assets/images/hillpad-transparent.png';
import newyork from '../assets/images/new-york.jpeg';
import review1 from '../assets/images/01.jpeg';
import data from '../data/discipline.json';

import './home.css'
import CourseCard from "../components/coursecard";
export default function Home() {
  const disciplines = data.results;

    return (
      <div className=" text-center mt-10  md:w-full max-w-8xl xl:flex xl:flex-col justify-center mx-auto">
        <section className="max-w-8xl mx-auto">
          <div className="mx-4 md:mx-10 lg:flex lg:flex-row-reverse lg:mx-2 lg:items-center max-w-8xl relative 2xl:mx-10">
            <h1 className=" font-medium text-text_black text-4xl xs:text-5xl text-center mb-6md:text-6xl md:font-semibold md:my-16 lg:hidden ">
              Discover <span className="text-orange"> Educational</span>{" "}
              Opportunities
            </h1>
            <div className="my-8 md:mx-10 lg:w-1/2 -z-20">
              <img src={hero} alt="hillpad_courses" />
            </div>
            <div className="lg:text-left lg:w-1/2 lg:absolute lg:left-3 xl:top-24 2xl:top-24 2xl:mx-auto ">
              <h1 className="hidden font-medium text-text_black text-4xl xs:text-5xl text-center mb-6 md:text-5xl md:font-semibold md:my-16 lg:text-left lg:mb-6 lg:block lg:my-0 xl:text-6xl 2xl:text-6xl">
                Discover <span className="text-orange"> Educational</span>{" "}
                Opportunities
              </h1>
              <p className="text-light_black mb-6 text-md md:text-2xl md:mx-10 md:my-10  lg:my-0 lg:text-lg lg:mx-0 lg:w-10/12 xl:text-xl 2xl:my-4">
                We make it easy to find the perfect course for you, so you can
                focus on taking your education to the next level.
              </p>
              <div className="w-72 mx-auto md:w-full md:rounded-full bg-white 2xl:w-60 ">
                <form className="shadow rounded-md md:flex justify-between md:px-4 md:rounded-full md:mx-8 md:items-center lg:mx-0 lg:absolute 2xl:left-0 bg-white z-20 2xl:w-full">
                  <fieldset className=" border-b border-light_black border-opacity-20 mx-2 px-2 py-4 md:border-0 ">
                    <div className="flex items-center gap-x-2">
                      <AiOutlineSearch className="text-light_black" />
                      <input
                        type="text "
                        className="focus:outline-none md:w-72"
                        placeholder="What do you want to study?"
                      ></input>
                    </div>
                  </fieldset>
                  <fieldset className="my-4">
                    <div></div>
                    <select className="text-left w-full p-2 text-light_black bg-white focus:outline-none lg:w-32">
                      <option className="text-text_black" value={"China"}>
                        China
                      </option>
                      <option className="text-text_black" value={"Belgium"}>
                        Belgium
                      </option>
                      <option className="text-text_black" value={"Canada"}>
                        Canada
                      </option>
                    </select>
                  </fieldset>
                  <button className="w-full text-white bg-orange py-3 px-2 text-lg font-medium rounded-3xl md:w-32 md:rounded-full">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20">
          <div>
            <h2 className="font-medium text-2xl md:text-5xl lg:font-bold lg:text-4xl">
              Browse by <span className="text-orange">Discipline</span>
            </h2>
            <div className="hidden">
              <div>View all</div>
              <div>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center my-6 font-medium">
            {
              disciplines.map((discipline) => (
                <div className=" p-4 w-32 shadow lg:w-40">
                  <div className={` bg-${discipline.color} p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                    <div className={`text-3xl  flex text-${discipline.color} justify-center p-1`}>
                      <i className={`fa fa-${discipline.icon}`} ></i>
                    </div>
                  </div>
                
                <div className="font-semibold">{discipline.name}</div>
              </div>
              ))
            }
            

          </div>
        </section>

        <section>
          <div className="font-medium text-3xl mb-10 md:text-5xl lg:font-semibold lg:text-4xl">
            Browse By <span className="text-orange">Programme</span>
          </div>
          <div className="flex flex-wrap justify-center xl:gap-x-10 2xl:justify-between max-w-6xl mx-auto">
            <div className="w-72">
              <div className="w-48 mx-auto">
                <img src={bachelor} alt="bachelors_degree" />
              </div>
              <div className="font-medium text-2xl">Bachelor's Programme</div>
              <div className="text-sm text-light_black p-4">
                Choose from more than 1000 Bachelor's programmes at
                universities, colleges, and school worldwide
              </div>
              <div>
                <button className="border-orange border-2 rounded-md font-medium p-4 text-orange">
                  Search Bachelors
                </button>
              </div>
            </div>
            <div className="w-72">
              <div>
                <div className="w-48 mx-auto">
                  <img src={masters} alt="masters_degree" />
                </div>
                <div className="font-medium text-2xl">Bachelor's Programme</div>
                <div className="text-sm text-light_black p-4">
                  Choose from more than 1000 Bachelor's programmes at
                  universities, colleges, and school worldwide
                </div>
                <div>
                  <button className="border-orange border-2 rounded-md font-medium p-4 text-orange">
                    Search Masters
                  </button>
                </div>
              </div>
            </div>

            <div className="w-72">
              <div>
                <div className="w-48 mx-auto">
                  <img src={doctorates} alt="doctorates_degree" />
                </div>
                <div className="font-medium text-2xl">Bachelor's Programme</div>
                <div className="text-sm text-light_black p-4">
                  Choose from more than 1000 Bachelor's programmes at
                  universities, colleges, and school worldwide
                </div>
                <div>
                  <button className="border-orange border-2 rounded-md font-medium p-4 text-orange">
                    Search Doctorates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-3xl font-medium my-8 md:text-5xl md:my-10 lg:text-4xl lg:font-semibold">
            Featured <span className="text-orange">Courses</span>
          </div>
          <div className="my-6 flex justify-center mx-auto">
            <CourseCard />
          </div>
        </section>

        <section className="my-14 md:flex items-center gap-x-6 mx-10">
          <div className="w-60 mx-auto md:w-1/2">
            <img src={hillpadBig} />
          </div>
          <div className="md:w-1/2">
            <div className=" font-semibold mt-5 text-2xl md:text-3xl md:text-left">
              Let us help you find your dream school
            </div>
            -{" "}
            <div className="text-light_black text-lg md:text-left">
              We provide an online platform designed to make finding and
              applying for undergraduate and postgraduate courses easy and
              efficient. With HillPad, you can conveniently access the best
              courses from leading universities around the world and unlock the
              possibilities of your future!
            </div>
            <div>
              <button className="bg-orange text-white px-8 my-6 py-4 rounded-md">
                About Us
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="font-medium text-3xl mb-8 md:text-5xl lg:font-semibold lg:text-4xl">
            Browse By <span className="text-orange">Country</span>
          </div>
          <div>
            <div className="shadow rounded-b-2xl w-72 mx-auto">
              <div className="rounded-2xl">
                <img src={newyork} className="rounded-t-2xl" />
              </div>
              <div className="py-4 font-medium text-lg">NewYork</div>
            </div>
          </div>
        </section>
        <section className="mt-10 mb-96">
          <div className="font-medium text-3xl mb-8 md:text-5xl">
            Reviews Across The Globe
          </div>
          <div className="lg:flex">
            <div className="text-left relative w-72 flex flex-col justify-center mx-auto lg:flex-row">
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
    );
}