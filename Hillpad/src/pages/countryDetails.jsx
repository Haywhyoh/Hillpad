import { useParams, useLocation } from "react-router-dom"
import { BsInfoCircle } from "react-icons/bs";
import { FiArrowLeft, FiChevronsRight, FiEdit, FiExternalLink, FiFlag, FiImage } from "react-icons/fi";
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
import CountrySchools from "../components/countrySchools";
import CountryCarousel from "../components/countryCarousel";
import { Link } from "react-router-dom";
import Prefooter from "../components/preFooter";
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
            return <CountrySchools props={props} />
        }
        if(info === 'costs'){
            return <LivingCost props={props} />  
        }
    }
    return (
        <div className="mt-24 xl:mt-40   max-w-full mx-auto px-4 lg:px-0">
            <div className="text-light_black flex gap-x-2 text-sm my-10"> 
             <Link to='/'><div className="flex gap-x-2 items-center"><span>Home</span><span><FiChevronsRight /> </span></div></Link>
             <Link to='/countries'><div className="flex gap-x-2 items-center"><span>Countries</span><span><FiChevronsRight /> </span></div> </Link>
             <Link to=''><span className="text-light">{props.name}</span></Link>
            </div>
            <div className=" my-6">
                <div className="flex items-center gap-x-2 text-sm text-light_black"><div><FaGlobeAmericas /> </div><div>{continentList[continent]}</div></div>

                <div><h2 className="text-3xl text-light font-bold mt-2 mb-12">{props.name}</h2></div>
                <div className="flex gap-x-6 my-4 flex-wrap gap-y-4">
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-orange" onClick={() => setInfo('about')}><div><BsInfoCircle /> </div><div className="">About</div></div>
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-light_black" onClick={() => setInfo('schools')}><div><FiImage /> </div><div>Schools</div></div>
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-light_black" onClick={() => setInfo('costs')}><div><FiEdit /> </div><div>Living Cost</div></div>
                </div>
                <div className="lg:flex justify-between my-8 border-t border-light_black border-opacity-20 pt-6">
                    <div className="lg:w-8/12 ">
                        {renderInfo(info)}
                    </div>

                    <div className=" rounded-lg p-8 xl:w-96 shadow-2 text-light_black h-fit border-border_white border-2 my-8 lg:my-0">
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
                                <div className="font-bold">{props.population}</div>
                                <div className="text-sm">population</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <div><FaSchool /></div>
                                <div className="font-bold">97</div>
                                <div className="text-sm">Listed Schools</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <div><FaUserGraduate /></div>
                                <div className="font-bold">1123</div>
                                <div className="text-sm">Students</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <div><FaSuitcaseRolling /></div>
                                <div className="font-bold">23232</div>
                                <div className="text-sm">International students</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
            <Prefooter />

            </div>
        </div>
    )
}