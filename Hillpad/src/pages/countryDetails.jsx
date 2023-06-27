import { useParams, useLocation } from "react-router-dom"
import { BsInfoCircle } from "react-icons/bs";
import { FiEdit, FiFlag, FiImage } from "react-icons/fi";
import { FaGlobeAmericas, FaGraduationCap, FaSchool, FaShoppingCart, FaSuitcaseRolling, FaUserGraduate, FaUsers } from "react-icons/fa";
import newyork from '../assets/images/new-york.jpeg';
import canada from '../assets/images/san-diego.jpeg';
import belgium from '../assets/images/dallas.jpeg';
import uk from '../assets/images/chicago.jpeg';
import CourseCard from "../components/searchCourseCard";
import countries from '../data/country.json';
import { useState } from "react";
import { degrees } from "../pages/degree";
export default function CountryDetail() {
    const countriesList = countries["results"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const param = useParams();
    const location = useLocation();
    const props = location.state;
    console.log(props);
    return (
        <div className="mt-24">
            <div className="mx-auto max-w-full my-10">
            <div className="flex items-center gap-x-2"><div><FaGlobeAmericas /> </div><div>{props.continent}</div></div>

<div><h2 className="text-3xl text-light font-bold">{props.name}</h2></div>
<div className="flex gap-x-6 my-4">
    <div className="flex gap-x-2 items-center py-2 px-2 bg-light_black bg-opacity-5 shadow-lg w-32 rounded-full"><div><BsInfoCircle /> </div><div>About</div></div>
    <div className="flex gap-x-2 items-center py-2 px-2 bg-light_black bg-opacity-5 shadow-lg w-32 rounded-full"><div><FiImage /> </div><div>Schools</div></div>
    <div className="flex gap-x-2 items-center py-2 px-2 bg-light_black bg-opacity-5 shadow-lg w-32 rounded-full"><div><FiEdit /> </div><div>Living Cost</div></div>
</div>
<div className="flex justify-between my-8">
<section className="w-7/12 ">
    <div>
        <div>
            {props.name}
        </div>
        <div>
            <p>{props.about}</p>
        </div>
        <div>
            <a href={props.about_wiki_link} target="_blank">Wikipedia</a>
        </div>
    </div>
    <div>
        <div><h2 className="font-bold text-xl m">Trivia and Fun Facts</h2></div>
        <div className="text-light font-bold mt-10">Trivia and fun facts about {props.name}</div>
        <ul>
            <li>After Russia, Canada is the second largest country in the world in terms of land mass.</li>
            <li>Canada has more lakes than the rest of the world’s lakes combined. Plenty of opportunities to go for a swim!</li>
            <li>The Blackberry Smartphone is developed in Waterloo, Ontario.</li>
            <li>Canada is home to approximately 55,000 different insect species.</li>
            <li>Canada has a prison for polar bears who break into people’s homes.</li>
        </ul>
    </div>
</section>
<div className="border p-8 w-96 shadow-md text-light_black">
    <div className=" border-b py-4">


        <div className="text-xl font-bold text-light_black">{props.name}</div>
        <div className="flex gap-x-2">
            <div className="flex gap-x-2 items-center"><div><FaGlobeAmericas /> </div><div>{props.continent}</div></div>
            <div className="flex gap-x-2 items-center"><div><FiFlag /> </div><div>{props.capital}</div></div>
        </div>
        <div className="flex gap-x-2 items-center"><div><FaGraduationCap /> </div><div>Explore schools</div></div>
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
            
            
            <section className='mx-auto max-w-full my-10'>
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