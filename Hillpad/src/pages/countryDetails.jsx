import { useParams, useLocation } from "react-router-dom"
import { BsInfoCircle } from "react-icons/bs";
import { FiEdit, FiExternalLink, FiFlag, FiImage } from "react-icons/fi";
import { FaGlobeAmericas, FaGraduationCap, FaSchool, FaShoppingCart, FaSuitcaseRolling, FaUserGraduate, FaUsers } from "react-icons/fa";
import newyork from '../assets/images/new-york.jpeg';
import canada from '../assets/images/san-diego.jpeg';
import belgium from '../assets/images/dallas.jpeg';
import uk from '../assets/images/chicago.jpeg';
import CourseCard from "../components/searchCourseCard";
import countries from '../data/country.json';
import { useState } from "react";
import { degrees } from "../pages/degree";
import AboutCountry from "../components/aboutCountry";
import LivingCost from "../components/livingCost";
export default function CountryDetail() {
    const continentList = {
        'eu': 'Europe',
        'na': 'North America',
        'as': 'Asia',
        'af': 'Africa',
        'sa': 'South America',
        'oc': 'Oceania',
    }
    const [info, setInfo] = useState('about');

    const countriesList = countries["results"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const param = useParams();
    const location = useLocation();
    const props = location.state;
    const continent = props.continent.toLowerCase();

    function renderInfo(info) {
        if (info === 'about') {
            return <AboutCountry props={props} />
        }
        if(info === 'schools'){
            return <h1>Schools</h1>
        }
        if(info === 'costs'){
            return <LivingCost props={props} />  
        }
    }
    return (
        <div className="mt-40  max-w-full mx-auto">
            <div className=" my-10">
                <div className="flex items-center gap-x-2 text-xs text-light_black"><div><FaGlobeAmericas /> </div><div>{continentList[continent]}</div></div>

                <div><h2 className="text-3xl text-light font-bold mt-2 mb-12">{props.name}</h2></div>
                <div className="flex gap-x-6 my-4">
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-orange" onClick={() => setInfo('about')}><div><BsInfoCircle /> </div><div className="">About</div></div>
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-light_black" onClick={() => setInfo('schools')}><div><FiImage /> </div><div>Schools</div></div>
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-light_black" onClick={() => setInfo('costs')}><div><FiEdit /> </div><div>Living Cost</div></div>
                </div>
                <div className="flex justify-between my-8 border-t border-light_black border-opacity-20 pt-6">
                    <div className="w-8/12 ">
                        {renderInfo(info)}
                    </div>

                    <div className=" rounded-lg p-8 w-96 shadow-2 text-light_black h-fit">
                        <div className=" border-b py-4">


                            <div className="text-xl font-bold text-light_black mb-2">{props.name}</div>
                            <div className="flex gap-x-2">
                                <div className="flex gap-x-2 items-center"><div><FaGlobeAmericas /> </div><div>{continentList[continent]}</div></div>
                                <div className="flex gap-x-2 items-center "><div><FiFlag /> </div><div>{props.capital}</div></div>
                            </div>
                            <div className="flex gap-x-2 items-center  border-light border w-fit px-4 py-2 text-light font-bold rounded-lg my-4"><div><FaGraduationCap /> </div><div>Explore schools</div></div>
                        </div>
                        <div className="py-4">
                            <div className="flex gap-x-2 items-center">
                                <div> <FaUsers /> </div>
                                <div>{props.population}</div>
                                <div>population</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <div><FaSchool /></div>
                                <div>97</div>
                                <div>Listed Schools</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <div><FaUserGraduate /></div>
                                <div>1123</div>
                                <div>Students</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <div><FaSuitcaseRolling /></div>
                                <div>23232</div>
                                <div>International students</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className=' my-10'>
                <div className=" text-3xl font-bold my-6"><h2>Popular Destinations</h2></div>
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

            <section className=' my-10 '>
                <div className=" text-3xl font-bold my-6"><h2>Recommended Courses for you</h2></div>
                <div className=" mx-0">
                    <div className="flex justify-between">
                        {degrees.filter((degree) => (degree.id < 4)).map((degree, index) => (<CourseCard key={index} prop={degree} isActive={index === currentIndex} />))}
                    </div>
                </div>
            </section>
        </div>
    )
}