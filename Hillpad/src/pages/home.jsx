import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineSearch, AiFillStar , AiOutlineTwitter} from "react-icons/ai";
import { HiOutlineCash } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { FaTractor, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import bachelor from '../assets/images/bachelors.svg';
import masters from '../assets/images/masters.svg';
import doctorates from '../assets/images/doctorates.svg';
import hero from '../assets/images/hero-img.jpeg'
import school1 from '../assets/images/01-1.jpeg';
import hillpadBig from '../assets/images/hillpad-transparent.png';
import newyork from '../assets/images/new-york.jpeg';
import review1 from '../assets/images/01.jpeg';

import './home.css'
export default function Home() {
    return (
        <div className="mx-4 text-center mt-10">
        <section>
        <div>
            

            <h1 className=" font-medium text-text_black text-4xl text-center mb-6">Discover <span className="text-orange"> Educational</span> Opportunities</h1>
            <div className='my-8'>
                <img src={hero} alt="hillpad_courses"/>
            </div>
            <p className="text-light_black mb-6 text-md">We make it easy to find the perfect course for you, so you can focus on taking your education to the next level.</p>
            <div className='w-72 '>
                <form className='border border-light_black border-opacity-10 rounded-md '>
                    <fieldset className=' border-b border-light_black border-opacity-50 px-2 py-4'>
                        <div className='flex items-center gap-x-2'>< AiOutlineSearch className='text-light_black' />
                        <input type='text ' placeholder='What do you want to study?'></input>
                        </div>
                    </fieldset>
                    <fieldset className='py-4'>
                        <div></div>
                        <select className='text-left w-full p-2 text-light_black bg-white'>
                            <option  className='text-text_black' value={'China'}>China</option>
                            <option className='text-text_black' value={'Belgium'}>Belgium</option>
                            <option className='text-text_black' value={'Canada'}>Canada</option>

                        </select>
                    </fieldset>
                    <button className='w-full text-white bg-orange py-3 px-2 text-lg font-medium rounded-3xl'>Search</button>

                </form>
            </div>
           
            </div>
        </section>
        
        <section className='my-20'>
            <div>
                <h2 className='font-medium text-2xl'>Browse by Discipline</h2>
                <div className='hidden'>
                    <div >View all</div>
                    <div><BsArrowRight /></div>
                </div>
            </div>
            <div className='flex flex-wrap gap-4 justify-center my-6 font-medium'>
                <div  className=' p-4 w-32 shadow '>
                    <div className='text-4xl text-green  flex justify-center '><FaTractor className='p-0'/></div>
                    <div className=''>Argriculture & Forestry</div>

                </div>
                <div className='text-center p-2 w-32 shadow'>
                    <div className='text-4xl text-yellow  flex justify-center'><FaTractor/></div>
                    <div>Argriculture & Forestry</div>
                </div>
                <div className='text-center p-2 w-32 shadow'>
                    <div className='text-4xl text-orange flex justify-center'><FaTractor/></div>
                    <div>Argriculture & Forestry</div>
                </div>
                <div className='text-center p-2 w-32 shadow'>
                    <div className='text-4xl text-deep_blue flex justify-center'><FaTractor/></div>
                    <div>Argriculture & Forestry</div>
                </div>
            </div>
        </section>

        <section>
            <div className='font-medium text-3xl mb-10'>Browse By Programme</div>
            <div>
                <div>
                    <div className='w-48 mx-auto'>
                        <img src={bachelor} alt="bachelors_degree"/>
                    </div>
                    <div className='font-medium text-2xl'>Bachelor's Programme</div>
                    <div className='text-sm text-light_black p-4'>Choose from more than 1000 Bachelor's programmes at universities, colleges, and school worldwide</div>
                    <div><button className='border-orange border-2 rounded-md font-medium p-4 text-orange'>Search Bachelors</button></div>
                </div>
                
            </div>
            <div>
                <div>
                    <div className='w-48 mx-auto'>
                        <img src={masters} alt="masters_degree"/>
                    </div>
                    <div className='font-medium text-2xl'>Bachelor's Programme</div>
                    <div className='text-sm text-light_black p-4'>Choose from more than 1000 Bachelor's programmes at universities, colleges, and school worldwide</div>
                    <div><button className='border-orange border-2 rounded-md font-medium p-4 text-orange'>Search Masters</button></div>
                </div>
                
            </div>

            <div>
                <div>
                    <div className='w-48 mx-auto'>
                        <img src={doctorates} alt="doctorates_degree"/>
                    </div>
                    <div className='font-medium text-2xl'>Bachelor's Programme</div>
                    <div className='text-sm text-light_black p-4'>Choose from more than 1000 Bachelor's programmes at universities, colleges, and school worldwide</div>
                    <div><button className='border-orange border-2 rounded-md font-medium p-4 text-orange'>Search Doctorates</button></div>
                </div>
                
            </div>
        </section>

        <section>
            <div className='text-3xl font-medium my-8'>Featured Courses</div>
            <div className='my-6 w-72'>
                <div className='shadow rounded-b-2xl relative px-2'>
                    <div className='absolute w-12 bg-deep_blue text-white rounded-md p-1 text-sm top-4 left-4'>
                        New
                    </div>
                    <div className=' rounded-xl'>
                        <img className=' rounded-t-2xl'src={school1} alt="bachelors_degree"/>
                    </div>
                    <div className='text-left m-4'>
                        <div className='font-normal text-sm text-orange'>B.Eng</div>
                        <div className='font-medium pb-2'>Electrical Engineering</div>
                        <div className='text-light_black text-sm italic opacity-70'>Toronto Metropolitan University</div>
                        <div className='text-light_black text-sm italic opacity-70'>Toronto, Canada</div>
                    <div className='flex gap-x-6 items-center opacity-70 text-light_black my-2'>
                        <div className='text-2xl'><HiOutlineCash /></div>
                        <div>$27,000/ year</div>
                    </div>
                    </div>
                    
                    <div className='flex gap-x-3 justify-center text-light_black text-sm border-t border-light_black border-opacity-30 py-4'>
                        <div className='flex items-center gap-x-1'><div><AiOutlineCalendar/></div><div></div>4 years</div>
                        <div className='flex items-center gap-x-1'><div><BiTimeFive/></div><div>Full Time</div> </div>
                        <div className='flex items-center gap-x-1'><div><SlLocationPin/></div><div>On Campus</div> </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='my-14'>
            <div><img src={hillpadBig}/></div>
            <div className=' font-semibold mt-5 text-2xl'>Let us help you find your dream school</div>
            -<div className='text-light_black text-lg'>
				We provide an online platform designed to make finding and applying
				for undergraduate and postgraduate courses easy and efficient.
				With HillPad, you can conveniently access the best courses from leading universities
				around the world and unlock the possibilities of your future!
			</div>
            <div>
                <button className='bg-orange text-white px-8 my-6 py-4 rounded-md'>About Us</button>
            </div>
        </section>

        <section>
            <div className='font-medium text-3xl mb-8'>Browse By Country</div>
            <div>
            <div className='shadow rounded-b-2xl w-72'>
                <div className='rounded-2xl'><img src={newyork} className='rounded-t-2xl'/></div>
                <div className='py-4 font-medium text-lg'>NewYork</div>
            </div>
            </div>
            
        </section>
        <section className='mt-10 mb-96'>
            <div className='font-medium text-3xl'>Reviews Across The Globe</div>
            <div className=''>
                <div className='text-left relative w-72 flex flex-col justify-center'>
                    <div className='shadow p-4 rounded-2xl absolute top-64 bg-white mx-auto'>
                            <div className='font-medium text-xl my-4'>"The best platform to finding courses!"</div>
                            <div className='text-light_black mb-4'>
				    	    	HillPad has made it so easy for me to find the perfect course for my degree.
				    	    	I'm so happy to have found this amazing platform!
				    	    </div>
                            <div className='flex gap-2 justify-between items-start'>
                                <div className='w-32'>
                                    <div className='text-xl font-medium '>Floyd Miles</div>
                                    <div className='text-light_black text-sm'>University of Cambridge</div>
                                </div>
                                <div>
                                    <div className='flex text-yellow text-xl'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />

                                        </div>
                                    <div className='my-2 text-light_black text-sm'> 43 reviews</div>
                                </div>
                            </div>
                            <div className='flex gap-x-6 my-4 text-xl'>
                                <div className='rounded-full shadow bg-opacity-20 p-2 text-light_black'>< AiOutlineTwitter /></div>
                                <div className='rounded-full shadow bg-opacity-20 p-2 text-light_black'><FaFacebookF /></div>
                                <div className='rounded-full shadow bg-opacity-20 p-2 text-light_black'><FaLinkedinIn /></div>
                            </div>
                        </div>
                        <div>
                            <img src={review1} className='rounded-2xl' alt='hillpad_school_review'/>
                        </div>


                    </div>
            </div>
        </section>
        </div>
    )
}