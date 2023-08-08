import { useParams, useLocation } from "react-router-dom"
import { BsInfoCircle } from "react-icons/bs";
import { FiArrowLeft, FiChevronsRight, FiEdit, FiExternalLink, FiFlag, FiImage, FiHeart, FiShare2 } from "react-icons/fi";
import { FaGlobeAmericas, FaGraduationCap, FaSchool, FaShoppingCart, FaSuitcaseRolling, FaUserGraduate, FaUsers } from "react-icons/fa";
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
        <div className="mt-24 xl:mt-40 mx-auto max-w-full px-4 xl:px-4 2xl:px-0">
            <div className="text-light_black flex gap-x-2 text-sm my-10"> 
             <Link to='/'><div className="flex gap-x-2 items-center"><span>Home</span><span><FiChevronsRight /> </span></div></Link>
             <Link to='/countries'><div className="flex gap-x-2 items-center"><span>Countries</span><span><FiChevronsRight /> </span></div> </Link>
             <Link to=''><span className="text-light">{props.name}</span></Link>
            </div>
            <div className=" my-6 md:my-0 xl:my-6 w-full">
                <div className="flex items-center gap-x-2 text-sm text-light_black"><div><FaGlobeAmericas /> </div><div>{continentList[continent]}</div></div>
                <div>
                <div><h2 className="text-3xl text-light font-bold mt-2 mb-12">{props.name}</h2></div>
                <div className="flex justify-between">

                
                <div className="flex gap-x-6 2xs:gap-x-4 my- md:my-0 xl:my-4 flex-wrap gap-y-4 ">
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-orange" onClick={() => setInfo('about')}><div><BsInfoCircle /> </div><div className="">About</div></div>
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-light_black" onClick={() => setInfo('schools')}><div><FiImage /> </div><div>Schools</div></div>
                    <div className="flex gap-x-2 items-center py-2 px-4 bg-light_black bg-opacity-5 shadow w-fit rounded-full justify-center text-light_black" onClick={() => setInfo('costs')}><div><FiEdit /> </div><div>Living Cost</div></div>
                </div>
                <div className="md:flex gap-x-4 text-light_black items-center hidden ">
                    <FiHeart />
                    <FiShare2 />
                </div>
                </div>
                <div className="md:flex md:w-full md:justify-between  my-8 md:my-4 xl:my-0 border-t border-light_black border-opacity-10 pt-6 lg:gap-x-6">
                    <div className="md:w-11/12 lg:w-9/12">
                        {renderInfo(info)}
                    </div>
                    <aside className='flex flex-column justify-center xs:w-84 2xs:w-88 md:w-60 lg:w-96 xl:w-100'>
                    <div className=" rounded-lg lg:p-8 p-8 md:p-4 w-full shadow-2 text-light_black h-fit border-border_white border-2 my-8 md:my-0 md:sticky md:top-32 ">
                        <div className=" border-b border-opacity-20 border-light_black py-4">
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
                                <div className="font-bold">{props.students}</div>
                                <div className="text-sm">Students</div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <div><FaSuitcaseRolling /></div>
                                <div className="font-bold">23232</div>
                                <div className="text-sm">{props.international_students}</div>
                            </div>
                        </div>
                    </div>
                    </aside>
                    
                </div>
                </div>
            </div>
            <div className='mx-auto mt-20  max-w-full lg:flex flex-col justify-center'>
                <Prefooter />
            </div>
        </div>
    )
}