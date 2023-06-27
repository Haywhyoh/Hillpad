import '../assets/flag-icons/css/flag-icons.css';
import countries from '../data/country.json';
import { FiChevronRight, FiChevronLeft, FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import newyork from '../assets/images/new-york.jpeg';
import canada from '../assets/images/san-diego.jpeg';
import belgium from '../assets/images/dallas.jpeg';
import uk from '../assets/images/chicago.jpeg';
import CourseCard from "../components/searchCourseCard";
import { degrees } from "../pages/degree";

export default function Countries() {
    const countriesList = countries["results"];
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className=" my-6">
            <section className=" max-w-full lg:flex mx-auto flex-col justify-center">
                <div>
                    <h1 className="lg:mt-24 font-bold lg:text-4xl mx-auto ">Countries</h1>

                </div>
                <div className="flex w-full items-center mt-10">
                    <div className='w-3/12'>
                        <form action="">
                            <label htmlFor='' className="pe-3">Sort by:</label>
                            <select className=" p-2 xl:w-56 rounded-md border border-light_black bg-white text-sm border-opacity-60">
                                <option value="Name">Name</option>
                                <option value="programme_count">No. of Programmes</option>

                            </select>
                        </form>
                    </div>
                    <div className="mx-8 w-7/12">
                        <hr className="xl:w-full mb-2  text-light_black opacity-80"></hr>

                    </div>
                    <div className='flex items-center gap-x-2 text-light_black opacity-80 w-2/12'>
                        <div><FiCheckCircle /></div>
                        <div>51 countries</div>
                    </div>

                </div>
                <div>
                    <div className='flex gap-x-5 gap-y-2 my-6 flex-wrap'>
                        {countriesList.map((country) => (
                            <div className='flex lg:w-76 px-4 py-1 gap-x-4 text-base'>
                                <div className={`fi fi-${country.short_code}`}></div>
                                <div className='text-light'>{country.name}</div>
                                <div className='text-light_black'>(8)</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-full my-10'>
                <div  className=" text-3xl font-bold my-6"><h2>Popular Destinations</h2></div>
                <div className='flex gap-x-8'>
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0">
                        <div className="rounded-2xl">
                            <img src={newyork} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black ">NewYork</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 ">
                        <div className="rounded-2xl">
                            <img src={canada} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black ">Canada</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 ">
                        <div className="rounded-2xl">
                            <img src={belgium} className="rounded-t-2xl" />
                        </div>
                        <div
                         className="py-4 font-bold text-base text-light_black ">Belgium</div>
                    </div>
                </div>
                <div>
                    <div className="shadow rounded-b-2xl w-72 xs:w-80 2xs:w-76 xs:mx-4 sm:mx-0 ">
                        <div className="rounded-2xl">
                            <img src={uk} className="rounded-t-2xl" />
                        </div>
                        <div className="py-4 font-bold text-base text-light_black ">United Kingdom</div>
                    </div>
                </div>
                </div>
            </section>

            <section className='mx-auto max-w-full'>
                <div className=" text-3xl font-bold my-6"><h2>Recommended Courses for you</h2></div>
                <div className=" mx-0">
                        <div className="flex  m-0 gap-x-8">
                            {degrees.filter((degree) => (degree.id < 4)).map((degree, index) => (<CourseCard key={index} prop={degree} isActive={index === currentIndex} />))}
                        </div>
                </div>
            </section>
        </div>
    )
}