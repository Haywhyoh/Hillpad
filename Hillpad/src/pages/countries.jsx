import '../assets/flag-icons/css/flag-icons.css';
import countries from '../data/country.json';
import { FiChevronRight, FiChevronLeft, FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from 'axios';
import newyork from '../assets/images/new-york.jpeg';
import canada from '../assets/images/san-diego.jpeg';
import belgium from '../assets/images/dallas.jpeg';
import uk from '../assets/images/chicago.jpeg';
import CourseCard from "../components/flatCourseCard";
import { degrees } from "../pages/degree";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Prefooter from '../components/preFooter';
export default function Countries() {

    const [countriesList, setCountries] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const countries = useSelector((state) => state.country.countryList);

     useEffect(() => {
        if (countries.length > 0) {
            setCountries(countries);
        }
        axios.get(`https://54.221.177.186/api/academics/country/list`)
            .then(res => {
                const countriesRes = res.data.results;
                setCountries(countriesRes);
            })
    }, []);
    return (
        <div className=" my-6 px-2 xl:px-4 2xl:px-0">
            <section className=" max-w-full lg:flex mx-auto flex-col justify-center">
                <div>
                    <h1 className="lg:mt-24 font-bold lg:text-4xl mx-auto ">Countries</h1>

                </div>
                <div className="flex w-full items-center mt-10 justify-between">
                    <div className='w-full lg:w-76'>
                        <form action="">
                            <label htmlFor='' className="pe-3">Sort by:</label>
                            <select className=" p-2 w-60 2xs:w-78 sm:w-72 lg:w-52 xl:w-56 rounded-md border border-light_black bg-white text-sm border-opacity-60">
                                <option value="Name">Name</option>
                                <option value="programme_count">No. of Programmes</option>

                            </select>
                        </form>
                    </div>
                    <div className=" sm:me-4 hidden w-8/12 lg:w-6/12 xl:w-7/12 sm:block">
                        <hr className="lg:w-full mb-2  text-light_black opacity-80"></hr>

                    </div>
                    <div className='md:flex items-center gap-x-2 text-light_black opacity-80 sm:w-4/12 lg:w-2/12 hidden '>
                        <div><FiCheckCircle /></div>
                        <div>51 countries</div>
                    </div>

                </div>
                <div>
                    <div className='flex sm:flex-row flex-col gap-x-5 lg:gap-x-0 gap-y-2 my-6 flex-wrap'>
                        {countriesList.map((country) => (
                            <Link to={`/countries/${country.name}`} state={country}>
                            <div className='flex w-64 lg:w-60 xl:w-64 px-4 py-1 gap-x-4 text-base'>
                                <div className={`fi fi-${country.short_code}`}></div>
                                <div className='text-light'>{country.name}</div>
                                <div className='text-light_black'>(8)</div>
                            </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </section>

            <div className='mx-auto mt-20  max-w-full lg:flex flex-col justify-center'>
                <Prefooter />
            </div>
        </div>
    )
}